import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _usersURL = "http://localhost:3000/api/users";

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this._usersURL);
  }
}
