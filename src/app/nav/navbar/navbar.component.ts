import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  logIn() {
    console.log("log in");
    this.router.navigate(["/log-in"]);
  }
  signUp() {
    console.log("sign up");
    this.router.navigate(["/sign-up"]);
  }
}
