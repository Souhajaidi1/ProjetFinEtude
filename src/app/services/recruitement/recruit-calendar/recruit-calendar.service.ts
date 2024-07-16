import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthServiceService } from 'app/services/AuthService/auth-service.service';
import { HRTest } from 'app/components/recruitment/recruit-calendar/add-hrtest/add-hrtest.component';
import { Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecruitCalendarService {
  base_url = "http://localhost:8090/";
  @Output() dataEvent = new EventEmitter<string>();

  private test!:any;

  constructor(private http: HttpClient, private authService: AuthServiceService) {}

 AddHRTest(hrtest: any): Observable<any> {
  const accessToken = this.authService.getAccessToken();
    console.log('Access Token:', accessToken);
    if (!accessToken) {
      console.error('No access token found!');
      return throwError(() => new Error('No access token found!'));
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    return this.http.post<any>(`${this.base_url}evaluations/createtest`, hrtest, { headers: headers })
    .pipe(
      tap(() => {
        this.dataEvent.emit(hrtest.interviewdate);
        this.test="hhh";
      }),

      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => error);
      })
    );

}
updateTest(id: number, hrtest: any): Observable<any> {
  const accessToken = this.authService.getAccessToken();
  if (!accessToken) {
    return throwError(() => new Error('No access token found!'));
  }
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${accessToken}`
  });

  return this.http.put<any>(`${this.base_url}evaluations/updatetest/${id}`, hrtest, { headers: headers })
    .pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => error);
      })
    );
}

deleteTest(id: number): Observable<void> {
  const accessToken = this.authService.getAccessToken();
  if (!accessToken) {
    return throwError(() => new Error('No access token found!'));
  }
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${accessToken}`
  });

  return this.http.delete<void>(`${this.base_url}evaluations/deletetest/${id}`, { headers: headers })
    .pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => error);
      })
    );
}
getAllTests(): Observable<HRTest[]> {
  const accessToken = this.authService.getAccessToken();
  if (!accessToken) {
    return throwError(() => new Error('No access token found!'));
  }
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${accessToken}`
  });

  return this.http.get<HRTest[]>(`${this.base_url}evaluations/alltests`, { headers: headers })
    .pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => error);
      })
    );
}
}
