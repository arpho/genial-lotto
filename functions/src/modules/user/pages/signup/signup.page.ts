import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { QuestionBase } from 'src/app/modules/dynamic-form/models/question-base';
import { TextboxQuestion } from 'src/app/modules/dynamic-form/models/question-textbox';
import { EmailQuestion } from 'src/app/modules/dynamic-form/models/question-email';
import { UserModel } from '../../models/userModel';
import { PasswordQuestion } from 'src/app/modules/dynamic-form/models/password-question';
import { UsersService } from '../../services/users.service';
import { servicesVersion } from 'typescript';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit, OnDestroy {
  public signupForm: FormGroup;
  public usersFields: any
  public modal: any;
  subscription: Subscription
  user:UserModel
  constructor(
    public modalCtrl: ModalController,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    private router: Router,
    public service:UsersService
  ) {
    this.usersFields = [new TextboxQuestion({
      key: 'firstName',
      label: 'nome',
      required: true,
      order: 1

    }), new TextboxQuestion({
      key: 'lastName',
      label: 'cognome',
      required: true,
      order: 2

    }), new EmailQuestion({
      key: 'email',
      label: 'email',
      required: true,
      order: 3

    }),

    new PasswordQuestion({
      key: 'password',
      label: 'password', required: true,
      retypePassword: true,
    })]
    this.signupForm = this.formBuilder.group({
      email: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: [
        '',
        Validators.compose([Validators.minLength(6), Validators.required]),
      ],
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  ngOnInit() { }

  filter(ev) {

  }
  dismiss(payment?) {
    this.modalCtrl.dismiss(payment)
  }

  async submit(ev) {
    this.user = new UserModel().load(ev)
    this.user.password = ev.password.password
    this.user.email = ev.email.email
    this.signupUser(this.signupForm, this.user)


  }

  async signupUser(signupForm: FormGroup, user: UserModel): Promise<void> {
  
      const email: string = signupForm.value.email.email;
      const password: string = signupForm.value.password;
      const successHandler = async () => {
        await this.service.callCloudPushUser(user.serialize())
        console.log('loading', this.modal)
        this.modal.dismiss().then(() => {
       

        })
      }
      const complete = ()=>{
        this.router.navigateByUrl('home');
      }

      const errorHandler = (error) => {
        this.modal.dismiss().then(async () => {
          const alert = await this.alertCtrl.create({
            message: error.message?error.message:`utente ${user.getTitle().value} creato correttamente`,
            buttons: [{ text: 'Ok', role: 'cancel' }],
          });
          await alert.present();
          await alert.onDidDismiss()
          this.router.navigateByUrl('home');
          
        });
      }
      this.authService.signupUser(user, successHandler, errorHandler,complete)

      this.modal = await this.loadingCtrl.create();
      await this.modal.present();
    }
  }

