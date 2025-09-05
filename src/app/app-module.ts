import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LoginComponent } from './login-component/login-component';
import { Routes, RouterModule  } from '@angular/router';

import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { ClientMeetingComponent } from './client-meeting-component/client-meeting-component';
import { ClientRegisterComponent } from './client-register-component/client-register-component';
import { ClientShowComponent } from './client-show-component/client-show-component';
import { ClientScheduleComponent } from './client-schedule-component/client-schedule-component';

const routes: Routes = [
  
];


@NgModule({
  declarations: [
    App,
    LoginComponent,
    ClientMeetingComponent,
    ClientRegisterComponent,
    ClientShowComponent,
    ClientScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
