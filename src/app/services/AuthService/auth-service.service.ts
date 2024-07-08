import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  login_url="http://localhost:8080/auth/realms/recruitment_realm/protocol/openid-connect/token";
  clientId = 'SpringBoot-Client'
  client_secret = 'a93e5834-1ded-41bf-895a-14cbf0e85894'
  private accessTokenKey = "accessToken";
  private refreshTokenKey = "refreshToken";
  headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(this.clientId)})

  constructor(private http:HttpClient) { }

  Login(username:string, password:string):Observable<any>{
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('grant_type','password');
    body.set('client_id',this.clientId);
    body.set('client_secret', this.client_secret)

    return this.http.post<any>(this.login_url, body.toString(), { headers: this.headers }).pipe(
      map(response =>{
        const { access_token, refresh_token } = response;
        localStorage.setItem(this.accessTokenKey, access_token);
        localStorage.setItem(this.refreshTokenKey, refresh_token);
        return access_token;}));}


        refreshToken(): Observable<any> {
          const refreshToken = localStorage.getItem(this.refreshTokenKey);
          if (!refreshToken) {
            throw new Error("Refresh token not found.");
          }

          const body = new URLSearchParams();
          body.set('grant_type', 'refresh_token');
          body.set('refresh_token', refreshToken);
          body.set('client_id', this.clientId);
          body.set('client_secret', this.client_secret);

          return this.http.post<any>(this.login_url, body.toString(), { headers: this.headers }).pipe(
            map(response => {
              const { access_token, refresh_token } = response;
              localStorage.setItem(this.accessTokenKey, access_token);
              localStorage.setItem(this.refreshTokenKey, refresh_token);
              return access_token;
            })
          );
        }

        logout(): void {
          localStorage.removeItem(this.accessTokenKey);
          localStorage.removeItem(this.refreshTokenKey);
        }

        isAuthenticated(): boolean {
          return !!localStorage.getItem(this.accessTokenKey);
        }

        getAccessToken(): string | null {
          return localStorage.getItem(this.accessTokenKey);
        }

        setAccessToken(token: string): void {
          localStorage.setItem(this.accessTokenKey, token);
        }
      }


