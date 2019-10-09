import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { FileOpener } from '@ionic-native/file-opener/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/'
    },
    {
      title: 'Expériences',
      url: '/experiences'
    },
    {
      title: 'Portfolio',
      url: '/portfolio'
    },
    {
      title: 'Contact',
      url: '/contact'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private location: Location,
    private fileOpener: FileOpener
  ) {
    this.initializeApp();
  }

  openPdf(){
    this.fileOpener.open('http://localhost:8100/assets/cv-jeremy-leclercq.pdf','application/pdf')
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error opening file', e));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
