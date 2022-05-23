import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../../models/userModel';
import { UsersService } from '../../services/users.service';
import { QuestionBase } from '../../../dynamic-form/models/question-base';
import { TextboxQuestion } from 'src/app/modules/item/models/question-textbox';
import { SwitchQuestion } from 'src/app/modules/item/models/question-switch';
import { DateQuestion } from 'src/app/modules/dynamic-form/models/question-date';
import { DateModel } from '../../models/birthDateModel';
import { DropdownQuestion } from 'src/app/modules/dynamic-form/models/question-dropdown';
import { configs } from 'src/app/configs/configs';
import { RoleModel } from '../../models/privilegesLevelModel';
import { ItemModelInterface } from 'src/app/modules/item/models/itemModelInterface';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss']
})
export class EditUserPage implements OnInit {
  currentUser: UserModel;
  questions: any;
  submitText: string;
  options: any;
  text: string;
  title: string;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public service: UsersService,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) { }



  dismiss() {
    this.modalCtrl.dismiss()
  }

  setBirthDate() {
    if (!this.currentUser.birthDate) {
      this.currentUser.birthDate = new DateModel({
        year: 1977,
        day: 16,
        month: 2
      });
      this.currentUser.birthDate.loadFromDate(new Date());
    }
  }

  setTitle() {
    this.title =
      this.currentUser.firstName && this.currentUser.lastName
        ? `${this.currentUser.firstName} ${this.currentUser.lastName}`
        : this.currentUser.email;
  }

  ngOnInit() {
    if (this.navParams.get('item')) { this.currentUser = new UserModel(this.navParams.get('item'), this.navParams.get('item').key); }
    this.currentUser && this.setBirthDate()
    this.submitText = 'modifica';
    this.currentUser && this.setTitle()
    const questions: any[] = [
      new TextboxQuestion({
        key: 'firstName',
        label: 'nome',
        value: this.currentUser ? this.currentUser.firstName : 'nome',
        order: 1,
        required: true
      }),
      new TextboxQuestion({
        key: 'lastName',
        label: 'cognome',
        value: this.currentUser ? this.currentUser.lastName : 'cognome',
        order: 2
      }),
      new SwitchQuestion({
        key: 'enabled',
        label: 'abilitato',
        value: this.currentUser ? this.currentUser.enabled : false,
        labelTrue: 'utente  abilitato',
        labelFalse: ' utente non abilitato ',
        iconTrue: 'happy',
        iconFalse: 'remove-circle',
        order: 3
      }),
      new DateQuestion({
        key: 'birthDate',
        label: 'Data di nascita',
        required: true,
        value: this.currentUser ? new DateModel(this.currentUser.birthDate).formatDate() : new DateModel(new Date()), // "1977-03-16",
        order: 4
      }),
      new DropdownQuestion({
        key: 'level',
        label: 'Ruolo utente',
        options: configs.accessLevel,
        value:this.currentUser? this.currentUser.level:3
      }),
      new SwitchQuestion({
        key: 'offlineEnabled',
        label: 'supporto offline ',
        value: this.currentUser ? this.currentUser.enabled : false,
        labelTrue: 'supporto offline ok',
        labelFalse: ' solo cloud ',
        iconTrue: 'cloud-upload',
        iconFalse: 'cloud',
        order: 3
      }),
    ];
    this.questions = questions;
  }

  filter(ev) { }
  submit(ev) {
    ev.email = this.currentUser.email; // non modifico email
    const user = new UserModel(ev);
    user.key = this.currentUser.key;
    user.role = configs.accessLevel.filter((r: RoleModel) => {
      // tslint:disable: triple-equals
      // tslint:disable-next-line: no-unused-expression
      r.value == this.currentUser.level;
    })[0];
    user.role = configs.accessLevel.filter(
      (v: RoleModel) => v.value == ev.level
    )[0];
    /*admin.auth().setCustomUserClaims(this.currentUser.key, {
      role: this.currentUser.level
    });*/
    this.service
      .updateItem(user)
      .then(v => {
        this.router.navigate(['/users']);
      })
      .catch(e => {
      });
  }
}
