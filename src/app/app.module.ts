import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import { SharedModule, MaterialModule } from './shared/shared.module';
import { MenuItems } from './shared/menu-items/menu-items';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { AuthGuard, AuthGuardLogin, AuthGuardReset } from 'app/guards';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { CustomValidators } from 'app/shared/custom-validators/custom-validators';
import { ColorPickerModule } from 'ngx-color-picker';
import { CookieService } from 'ngx-cookie-service';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { BotDetectCaptchaModule } from 'angular-captcha';
import { LockScreenComponent } from './components/auth/lock-screen/lock-screen.component';
import { ExpirationSessionComponent } from './components/auth/expiration-session/expiration-session.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ErrorInterceptor } from 'app/interceptors/error.interceptor';
import { HttpClientInterceptor } from 'app/interceptors/httpClient.interceptor';
import { AuthModule } from './components/auth/auth.module';
import { LockScreenModule } from './components/auth/lock-screen/lock-screen.module';
import { DirectivesModule } from './directives/shared/directives.module';
import { ProjectManagementModule } from './components/project-management/project-management.module';
import { HumanResourcesModule } from './components/human-resources/human-resources.module';
import { WorkFromHomeService } from './services/human-resources/work-from-home';
import {
  NotificationService, ShowErrorsService, GenericService, DateTimeService,
  PagerService, EntityParameterService, SearchFilterService, ExcelService,
  FileService, GroupsService, AuthenticationService, CoreDataService, MailService, SortService
} from './services/shared';
import { NumberFormatter } from './helpers';
import { ListCandidatesComponent } from './components/recruitment/recruit-candidates/list-candidates/list-candidates.component';
import { DefaultComponent } from './components/dashboard/default/default.component';
import { AddOfferFormComponent } from './components/recruitment/recruit-offers/add-offer-form/add-offer-form.component';
import { DashboardComponent } from './components/recruitment/recruit-dashboard/dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { EditOfferDialogComponent } from './components/recruitment/recruit-offers/offer-management/edit-offer-dialog/edit-offer-dialog.component';
import { EvaluationComponent } from './components/recruitment/recruit-evaluation/evaluation/evaluation.component';
import { recruitementModule } from './components/recruitment/recruit-calendar/recruit-calendar.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { TestListComponent } from './components/recruitment/recruit-evaluation/test-list/test-list.component';
import { MatRadioModule } from '@angular/material/radio';
export const CUSTOM_DT_FORMATS = {
  parse: {
    dateInput: 'L',
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    BreadcrumbsComponent,
    ExpirationSessionComponent,
    ListCandidatesComponent,
    DashboardComponent,
    EditOfferDialogComponent,
    EvaluationComponent,
    TestListComponent
  ],
  imports: [
    MatTableModule,
    MatSortModule,
    MatTooltipModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    ProjectManagementModule,
    HumanResourcesModule,
    recruitementModule,
    DirectivesModule,
    MaterialModule,
    ColorPickerModule,
    NgIdleKeepaliveModule.forRoot(),
    MatDialogModule,
    MatSnackBarModule,
    NgxMatSelectSearchModule,
    LockScreenModule,
    AuthModule,
    MatButtonModule,
    BotDetectCaptchaModule,
    MatDatepickerModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatNativeDateModule,
    MatOptionModule,
    MatRadioModule


  ],
  entryComponents: [
    AdminComponent,
    LockScreenComponent,
    ExpirationSessionComponent
  ],
  providers: [
    CoreDataService,
    WorkFromHomeService,
    MailService,
    NotificationService,
    MenuItems,
    AuthGuard,
    ShowErrorsService,
    EntityParameterService,
    GenericService,
    DateTimeService,
    PagerService,
    AuthenticationService,
    FileService,
    CustomValidators,
    AuthGuardReset,
    CookieService,
    AuthGuardLogin,
    SearchFilterService,
    ExcelService,
    GroupsService,
    SortService,
    NumberFormatter,
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DT_FORMATS },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
