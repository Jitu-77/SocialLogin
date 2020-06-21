import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { SocialLoginModule,GoogleLoginProvider,AuthServiceConfig } from 'angular4-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialLoginModule, SocialAuthServiceConfig,GoogleLoginProvider } from 'angularx-social-login';
//import { LoggedinComponent } from './loggedin/loggedin.component';
//import { routingComponents } from './app-routing.module';


/*const routes: Routes = [
 
  {path :'loggedin',component:LoggedinComponent}
  
];*/

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    //SocialLoginModule.initialize(config),
    SocialLoginModule,
    AppRoutingModule,
    RouterModule,
    //routingComponents
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
