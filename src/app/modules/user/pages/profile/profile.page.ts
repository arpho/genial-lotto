import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { AuthService } from "../../services/auth.service";
import { ProfileService } from "../../services/profile.service";
import { Router } from "@angular/router";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";
import { textChangeRangeIsUnchanged } from "typescript";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  public userProfile: any;
  public birthDate: string;

  ngOnInit() {
    console.log('init profile')
    this.userProfile = {firstName:'nome',lastName:'cognome'}
    if (this.profileService.getUserProfileReference()) {
      console.log('getting profile')
      this.profileService
        .getUserProfileReference()
        .on("value", userProfileSnapshot => {
          console.log('got profile',userProfileSnapshot)
          this.userProfile = userProfileSnapshot.val() || { firstName: '', lastName: '' };
          if (this.userProfile.birthDate) {
            var dob = new Date();
            dob.setFullYear(this.userProfile.birthDate.year);
            dob.setMonth(Number(this.userProfile.birthDate.month));
            dob.setDate(this.userProfile.birthDate.day);
            this.birthDate = dob.toISOString();
          }
        })
    }
  }

  logOut(): void {
    this.authService.logoutUser().then(() => {
      this.router.navigateByUrl("login");
    });
  }

  async updateName(): Promise<void> {
    const alert = await this.alertCtrl.create({
      subHeader: "Il tuo nome e cognome",
      inputs: [
        {
          type: "text",
          name: "firstName",
          placeholder: "Il tuo Nome",
          value: this.userProfile ? this.userProfile.firstName : ''
        },
        {
          type: "text",
          name: "lastName",
          placeholder: "Il tuo Cognome",
          value: this.userProfile ? this.userProfile.lastName : ''
        }
      ],
      buttons: [
        { text: "Annulla" },
        {
          text: "Salva",
          handler: data => {
            this.userProfile.firstName = data.firstName;
            this.userProfile.lastName = data.lastName;
            this.profileService.updateName(data.firstName, data.lastName).then((value=>{console.log('updated',value)}));
          }
        }
      ]
    });
    await alert.present();
  }

  extract_date_from_data(d) {
    return d.split("T")[0].split("-");
  }

  makeup_date(dateList: string[]) {
    return {
      year: Number(dateList[0]),
      month: Number(dateList[1]),
      day: Number(dateList[2])
    };
  }
  changedDate(d) {
  }

  updateDOB(birthDate: any, ev): void {
    birthDate = this.makeup_date(this.extract_date_from_data(birthDate));
    if (birthDate === undefined) {
      return;
    } else if (
      birthDate.year === undefined ||
      birthDate.month === undefined ||
      birthDate.day === undefined
    ) {
      return;
    }
    const dateOfBirth: Date = new Date(
      birthDate.year,
      birthDate.month - 1,
      birthDate.day
    );
    this.profileService.updateDOB(dateOfBirth);
  }

  async updateEmail(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        { type: "text", name: "newEmail", placeholder: "la tua nuova mail" },
        { name: "password", placeholder: "la tua password", type: "password" }
      ],
      buttons: [
        { text: "Annulla" },
        {
          text: "Salva",
          handler: data => {
            this.profileService
              .updateEmail(data.newEmail, data.password)
              .then(() => {
              })
              .catch(error => {
                console.log("ERROR: " + error.message);
              });
          }
        }
      ]
    });
    await alert.present();
  }

  async updatePassword(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        {
          name: "newPassword",
          placeholder: "Nuova password",
          type: "password"
        },
        {
          name: "oldPassword",
          placeholder: "Vecchia password",
          type: "password"
        }
      ],
      buttons: [
        { text: "Annulla" },
        {
          text: "Salva",
          handler: data => {
            this.profileService.updatePassword(
              data.newPassword,
              data.oldPassword
            );
          }
        }
      ]
    });
    await alert.present();
  }

  constructor(
    private alertCtrl: AlertController,
    private authService: AuthService,
    private profileService: ProfileService,
    private router: Router
  ) { }
}
