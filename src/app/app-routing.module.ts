import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbouutUsComponent } from './abouut-us/abouut-us.component';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AbouutUsComponent},
  {path:'download',component:DownloadComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
