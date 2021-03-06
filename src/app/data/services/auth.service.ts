import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { UserModel } from "../model/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private loginUrl = "http://localhost:5000/ngteam/get-user";

  constructor(private http: HttpClient) {}

  login({ username, password }): Observable<UserModel> {
    return this.http.post<UserModel>(this.loginUrl, { username, password });
  }
}
