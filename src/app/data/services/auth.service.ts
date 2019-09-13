import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private loginUrl = "http://localhost:5000/ngteam/get-user";

  constructor(private http: HttpClient) {}

  login({ username, password }): Observable<string> {
    return this.http.post<string>(this.loginUrl, { username, password });
  }
}
