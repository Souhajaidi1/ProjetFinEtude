import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthServiceService } from 'app/services/AuthService/auth-service.service';
import { Candidate } from 'app/components/recruitment/recruit-candidates/list-candidates/list-candidates.component';

@Injectable({
  providedIn: 'root'
})
export class RecruitCandidatesService {
  base_url = "http://localhost:8086/";

  constructor(private http: HttpClient, private authService: AuthServiceService) { }

  private getHeaders(): HttpHeaders {
    const accessToken = this.authService.getAccessToken();
    console.log('Access Token:', accessToken);

    if (!accessToken) {
      console.error('No access token found!');
      throw new Error('No access token found!');
    }

    return new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });
  }

  addCandidate(candidate: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(`${this.base_url}applications/addapp`, candidate, { headers })
      .pipe(catchError(this.handleError));
  }

  getCandidates(): Observable<Candidate[]> {
    const headers = this.getHeaders();
    return this.http.get<Candidate[]>(`${this.base_url}applications/getallapp`, { headers })
      .pipe(catchError(this.handleError));
  }

  getCandidateById(id: number): Observable<Candidate> {
    const headers = this.getHeaders();
    return this.http.get<Candidate>(`${this.base_url}applications/getappbyid/${id}`, { headers })
      .pipe(catchError(this.handleError));
  }

  updateCandidate(id: number, candidate: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put<any>(`${this.base_url}applications/updateapp/${id}`, candidate, { headers })
      .pipe(catchError(this.handleError));
  }
  updateCandidateStatus(id: number, candidate: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put<any>(`${this.base_url}applications/updateappstatus/${id}`, candidate, { headers })
      .pipe(catchError(this.handleError));
  }

  deleteCandidate(id: number): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete<any>(`${this.base_url}applications/delete/${id}`, { headers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error(error.message || 'Server error'));
  }
}
