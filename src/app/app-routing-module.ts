import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { ClientMeetingComponent } from './client-meeting-component/client-meeting-component';
import { ClientRegisterComponent } from './client-register-component/client-register-component';
import { ClientShowComponent } from './client-show-component/client-show-component';
import { ClientScheduleComponent } from './client-schedule-component/client-schedule-component';

const routes: Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'climeeting', component:ClientMeetingComponent,
    children:[
      {path:'clientregister',component:ClientRegisterComponent},
      {path:'clientshow', component:ClientShowComponent},
      {path:'clientschedule', component:ClientScheduleComponent}
      //,      { path: '', redirectTo: 'clientshow', pathMatch: 'full' }
    ] 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
