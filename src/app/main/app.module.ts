import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LeftPanelComponent } from '../layout/left-panel/left-panel.component';
import { RightPanelComponent } from '../layout/right-panel/right-panel.component';
import { AboutComponent } from '../pages/about/about.component';
import { LogoCardComponent } from '../components/logo-card/logo-card.component';
import { MainMenuComponent } from '../components/main-menu/main-menu.component';
import { SocialBarComponent } from '../components/social-bar/social-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    RightPanelComponent,
    AboutComponent,
    LogoCardComponent,
    MainMenuComponent,
    SocialBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    LeftPanelComponent,
    RightPanelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
