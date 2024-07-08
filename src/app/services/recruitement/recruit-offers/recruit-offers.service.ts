import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError } from 'rxjs';
import { AuthServiceService } from 'app/services/AuthService/auth-service.service';
import { Offer } from 'app/components/recruitment/recruit-offers/offer-management/offer-management.component';

@Injectable({
  providedIn: 'root'
})
export class RecruitOffersService {
  base_url = "http://localhost:8085/";

  constructor(private http: HttpClient, private authService: AuthServiceService) { }

  AddOffer(offer: any): Observable<any> {
    const accessToken = this.authService.getAccessToken();
    console.log('Access Token:', accessToken);

    if (!accessToken) {
      console.error('No access token found!');
      return throwError(() => new Error('No access token found!'));
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    return this.http.post<any>(`${this.base_url}apioffer/addoffer`, offer, { headers: headers });
  }
  EditOffer(id: number, offer: any): Observable<any> {
    const accessToken = this.authService.getAccessToken();
    console.log('Access Token:', accessToken);

    if (!accessToken) {
      console.error('No access token found!');
      return throwError(() => new Error('No access token found!'));
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`,
       'Content-Type': 'application/json'
    });

    return this.http.put<any>(`${this.base_url}apioffer/updateoffer/${id}`, offer, { headers: headers });
  }

  DeleteOffer(id: number): Observable<void> {
    const accessToken = this.authService.getAccessToken();
    console.log('Access Token:', accessToken);

    if (!accessToken) {
      console.error('No access token found!');
      return throwError(() => new Error('No access token found!'));
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    return this.http.delete<void>(`${this.base_url}apioffer/deleteoffer/${id}`, { headers: headers });
  }
  getOffers(): Observable<Offer[]> {
    const accessToken = this.authService.getAccessToken();
    console.log('Access Token:', accessToken);

    if (!accessToken) {
      console.error('No access token found!');
      return throwError(() => new Error('No access token found!'));
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    return this.http.get<Offer[]>(`${this.base_url}apioffer/retrievealloffer`, { headers: headers });
  }
}
