import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { AUTH_PROVIDERS } from 'angular2-jwt';


import { AppComponent }  from './app.component';
import { ProfileComponent } from "./components/profile/profile.component";
import { HomeComponent } from "./components/home/home.component";
import { Auth } from "./services/auth.service";
import { AuthGuard } from "./auth.guard";

@NgModule({
  imports: [ BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
    ])
  ],
  declarations: [ AppComponent,
    ProfileComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ AUTH_PROVIDERS, Auth, AuthGuard ]
})
export class AppModule { }
