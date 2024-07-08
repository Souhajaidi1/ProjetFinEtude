import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthServiceService } from 'app/services/AuthService/auth-service.service';
import { Evaluation } from 'app/components/recruitment/recruit-evaluation/evaluation/evaluation.component';
@Injectable({
  providedIn: 'root'
})
export class RecruitEvaluationService {
  private base_url = 'http://localhost:8090/';

  constructor(private http: HttpClient, private authService: AuthServiceService) { }

  saveEvaluation(evaluation: Evaluation): Observable<Evaluation> {
    const accessToken = this.authService.getAccessToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<Evaluation>(`${this.base_url}evaluations/addev`, evaluation, { headers })
      .pipe(
        catchError(error => {
          console.error('Error saving evaluation:', error);
          return throwError(error);
        })
      );
  }
}
