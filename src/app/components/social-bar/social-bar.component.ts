import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/constants/app-settings';

@Component({
  selector: 'app-social-bar',
  templateUrl: './social-bar.component.html',
  styleUrls: ['./social-bar.component.scss']
})
export class SocialBarComponent implements OnInit {

  mailLink!: String;
  appSettings = AppSettings;

  constructor() { }

  ngOnInit(): void {
    this.mailLink = "mailto:" + this.appSettings.MAIL;
  }

}
