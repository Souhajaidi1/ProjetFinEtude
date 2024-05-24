import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecruitOffersService {
base_url="http://localhost:8085/";

login_url="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  AddOffer(offer:any){
    return this.http.post<any>(`${this.base_url}apioffer/addoffer`, offer);
  }

  Login(User:any):Observable<any>{
    return this.http.post<any>(`${this.login_url}/auth/realms/recruitment_realm/protocol/openid-connect/token`, User);
  }
}
