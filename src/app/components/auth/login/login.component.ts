import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'app/services/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'environments/environment';
import { CaptchaComponent } from 'angular-captcha';
import { PasswordStrengthBarComponent } from 'app/shared/password-strength-bar/password-strength-bar.component';
import { RecruitOffersService } from 'app/services/recruitement/recruit-offers/recruit-offers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  idlestart = false;
  public commitTime: string;
  failedLogin = false;
  failedCaptcha = false;
  @ViewChild(CaptchaComponent, {static: true}) captchaComponent: CaptchaComponent;
  errorMessages: string;

  recaptchaSended = false;
  constructor(
    private AuthService:RecruitOffersService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private cookieService: CookieService
  ) {
    this.commitTime = environment.commitTime;
  }
  userLogin = '';
  userPassword = '';
  returnUrl: string;
  isLoading = false;
  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');

    this.authenticationService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
    //this.captchaComponent.captchaEndpoint = environment.apiUrl + environment.captchaEndpointUrl;
    this.captchaComponent.captchaEndpoint =  environment.captchaEndpointUrl;

  }

  validateCaptcha(): void {
    const userEnteredCaptchaCode = this.captchaComponent.userEnteredCaptchaCode;
    const captchaId = this.captchaComponent.captchaId;

    const postData = {
      userEnteredCaptchaCode: userEnteredCaptchaCode,
      captchaId: captchaId
    };

    this.authenticationService.validateCaptcha(postData)
      .subscribe(
        response => {
          if (response === 'false') {
            this.failedLogin = false;
            this.failedCaptcha = true;
            this.captchaComponent.reloadImage();
          } else {
            this.login();
            this.failedCaptcha = false;
          }
        },
        error => {
          this.failedLogin = false;
          this.failedCaptcha = true;
        });
  }
  Loginnn(loginForm:any){
    let data={
      grant_type:this.userLogin,
      username:this.userPassword,
    }
     this.AuthService.Login(data).subscribe((res)=>{
      console.log(res)
    });
  }

  login() {
    this.isLoading = true;
    const score = PasswordStrengthBarComponent.measureStrength(this.userPassword);
    this.authenticationService.login(this.userLogin, this.userPassword, score)
      .subscribe(
        userProfile => {
          this.isLoading = false;
          if (userProfile && this.authenticationService.isAuthenticated()) {
            this.cookieService.set('userLogin', this.userLogin);
            if (this.returnUrl.indexOf(';') > -1) {
              this.getOptionalParameters(this.returnUrl);
            } else {
              this.router.navigate([this.returnUrl]);
            }
          } else {
            this.failedCaptcha = false;
            this.failedLogin = true;
          }
        },
        () => {
          this.isLoading = false;
          this.failedCaptcha = false;
          this.failedLogin = true;
        }
      );
  }

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
