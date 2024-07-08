import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError } from 'rxjs';
import { AuthServiceService } from 'app/services/AuthService/auth-service.service';
import { HRTest } from 'app/components/recruitment/recruit-calendar/add-hrtest/add-hrtest.component';
@Injectable({
  providedIn: 'root'
})
export class RecruitCalendarService {
  base_url = "http://localhost:8090/";

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

    return this.http.post<any>(`${this.base_url}evaluations/createtest`, hrtest, { headers: headers });
}
}
