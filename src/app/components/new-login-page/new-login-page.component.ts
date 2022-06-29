
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, AuthServiceConfig, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

declare var google: any;

@Component({
  selector: 'app-new-login-page',
  templateUrl: './new-login-page.component.html',
  styleUrls: ['./new-login-page.component.css']
})
export class NewLoginPageComponent implements OnInit, AfterViewInit {
  user: SocialUser;

  
  loginForm = new FormGroup({});
  registerForm = new FormGroup({});
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });

    this.registerForm = this.fb.group({
      email:[''],
      password:[''],
      confirmPassword:['']
    })
  }

  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id: "737706466412-uuumub4vohnks8u5n4hhjd1g2rqr5rot.apps.googleusercontent.com",
      callback: this.handleCredentialResponse.bind(Response)
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large", 'width': 326 }  // customization attributes
    );
  }

  handleCredentialResponse(response: any) {
    //Do what you wish with the received idToken
    console.log(response.credential);

    // This next is for decoding the idToken to an object if you want to see the details.
    let base64Url = response.credential.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    console.log(JSON.parse(jsonPayload));
    console.log('Came here');
    this.router.navigate(['edit-project-template']);
  }
}
