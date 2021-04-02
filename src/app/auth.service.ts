import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerURL = "http://localhost:3000/api/register";
  private _loginURL = "http://localhost:3000/api/login";

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user: any) {
    return this.http.post(this._registerURL, user);
  }

  loginUser(user: any) {
    return this.http.post(this._loginURL, user);
  }

  logoutUser(user: any) {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
