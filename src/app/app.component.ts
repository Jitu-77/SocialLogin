import { Component , OnInit} from '@angular/core';
//import { AuthService,GoogleLoginProvider }  from 'angular4-social-login';
import { SocialAuthService ,SocialUser} from "angularx-social-login";
import {  GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sociallogin';
  /*user:any;
  constructor(private socialAuthService:AuthService ){}
  signIn(platform:string):void{
    platform = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(platform).then((response)=>
    {
      console.log(platform+"logged in =" , response);
      
      this.user = response;
    });
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }
  */
 constructor(private authService: SocialAuthService) { }
 public user: SocialUser;
 signInWithGoogle(): void {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
}

/*signInWithFB(): void {
  this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
}*/

signOut(): void {
  this.authService.signOut();
}

ngOnInit() {
  this.authService.authState.subscribe((user) => {
    this.user = user;
  });
}

  
}

