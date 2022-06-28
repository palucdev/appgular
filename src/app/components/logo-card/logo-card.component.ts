import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/constants/app-settings';

@Component({
  selector: 'app-logo-card',
  templateUrl: './logo-card.component.html',
  styleUrls: ['./logo-card.component.scss']
})
export class LogoCardComponent implements OnInit {
  
  appSettings = AppSettings;

  constructor() { }

  ngOnInit(): void {
  }

}
