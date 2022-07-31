import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-cookies-law',
  templateUrl: './cookies-law.component.html',
  styleUrls: ['./cookies-law.component.scss'],
})
export class CookiesLawComponent implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  async settingsPopover(ev: any) {
    const siteInfo = { id: 1, name: 'edupala' };
    const popover = await this.popoverController.create({
      component: CookiesLawComponent,
      event: ev,
      cssClass: 'popover_setting',
      componentProps: {
        site: siteInfo
      },
      translucent: true
    });

    popover.onDidDismiss().then((result) => {
      console.log(result.data);
    });

    return await popover.present();
    /** Sync event from popover component */

  }

}
