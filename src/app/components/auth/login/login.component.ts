import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'app/services/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'environments/environment';
import { CaptchaComponent } from 'angular-captcha';
import { PasswordStrengthBarComponent } from 'app/shared/password-strength-bar/password-strength-bar.component';
import { AuthServiceService } from 'app/services/AuthService/auth-service.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // idleState = 'Not started.';
  // timedOut = false;
  // lastPing?: Date = null;
  // idlestart = false;
   public commitTime: string;
   failedLogin = false;
   failedCaptcha = false;
  userLogin: string = '';
  userPassword: string = '';
  returnUrl: string;
  @ViewChild(CaptchaComponent, {static: true}) captchaComponent: CaptchaComponent;
  errorMessages: string;

  recaptchaSended = false;

  constructor(
    private AuthService:AuthServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private cookieService: CookieService
  ) {
    this.commitTime = environment.commitTime;
  }
  isLoading = false;
  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');

    this.authenticationService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
    //this.captchaComponent.captchaEndpoint = environment.apiUrl + environment.captchaEndpointUrl;
    this.captchaComponent.captchaEndpoint =  environment.captchaEndpointUrl;

  }

  // validateCaptcha(): void {
  //   const userEnteredCaptchaCode = this.captchaComponent.userEnteredCaptchaCode;
  //   const captchaId = this.captchaComponent.captchaId;

  //   const postData = {
  //     userEnteredCaptchaCode: userEnteredCaptchaCode,
  //     captchaId: captchaId
  //   };

  //   this.authenticationService.validateCaptcha(postData)
  //     .subscribe(
  //       response => {
  //         if (response === 'false') {
  //           this.failedLogin = false;
  //           this.failedCaptcha = true;
  //           this.captchaComponent.reloadImage();
  //         } else {
  //           this.login();
  //           this.failedCaptcha = false;
  //         }
  //       },
  //       error => {
  //         this.failedLogin = false;
  //         this.failedCaptcha = true;
  //       });
  // }
  login(loginForm: any) {
    if (loginForm.valid) {
      this.AuthService.Login(this.userLogin, this.userPassword).subscribe(
        (res) => {
          console.log('Login successful, token:', res);
          const accessToken = res;
          this.AuthService.setAccessToken(accessToken);
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }

  // login() {
  //   this.isLoading = true;
  //   const score = PasswordStrengthBarComponent.measureStrength(this.userPassword);
  //   this.authenticationService.login(this.userLogin, this.userPassword, score)
  //     .subscribe(
  //       userProfile => {
  //         this.isLoading = false;
  //         if (userProfile && this.authenticationService.isAuthenticated()) {
  //           this.cookieService.set('userLogin', this.userLogin);
  //           if (this.returnUrl.indexOf(';') > -1) {
  //             this.getOptionalParameters(this.returnUrl);
  //           } else {
  //             this.router.navigate([this.returnUrl]);
  //           }
  //         } else {
  //           this.failedCaptcha = false;
  //           this.failedLogin = true;
  //         }
  //       },
  //       () => {
  //         this.isLoading = false;
  //         this.failedCaptcha = false;
  //         this.failedLogin = true;
  //       }
  //     );
  // }

  getOptionalParameters(Url: string) {
    const queryParams = {};
    let param: any;
    let value: any;
    const route = Url.substr(0, Url.indexOf(';'));
    let parameters = Url.substr(Url.indexOf(';') + 1, Url.length - Url.indexOf(';') - 1);
    while (parameters.indexOf(';') > -1) {
      param = parameters.substr(0, parameters.indexOf('='));
      value = parameters.substr(parameters.indexOf('=') + 1, parameters.indexOf(';') - parameters.indexOf('=') - 1);
      queryParams[param] = value;
      parameters = parameters.substr(parameters.indexOf(';') + 1, parameters.length - parameters.indexOf(';') - 1);
    }
    param = parameters.substr(0, parameters.indexOf('='));
    value = parameters.substr(parameters.indexOf('=') + 1, parameters.length - parameters.indexOf('=') - 1);
    queryParams[param] = value;

    this.router.navigate([route], { queryParams });
  }
}
