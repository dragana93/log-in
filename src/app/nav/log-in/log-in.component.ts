import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { AuthService } from "src/app/data/services/auth.service";
import { Observable, Subscription } from "rxjs";
import { UserModel } from "src/app/data/model/user";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  profileForm = this.fb.group({
    username: [""],
    password: [""]
  });

  private user$: Subscription;
  nguser: UserModel;
  // showForm: boolean = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.profileForm = this.createFormGroupWithBuilder(fb);
  }

  ngOnInit() {}

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit() {
    // this.showForm = true;
    console.warn(this.profileForm.controls["username"].value);
    console.warn(this.profileForm.controls["password"].value);

    this.user$ = this.authService
      .login({
        username: this.profileForm.controls["username"].value,
        password: this.profileForm.controls["password"].value
      })
      .subscribe(u => {
        // this.user$ = u;

        this.nguser = u;
        console.log(this.nguser);
        if (this.nguser.registrated) {
          console.log("DASHBOARD");
          // this.showForm = false;
          this.router.navigate(["log-in", "dashboard"]);
        }
      });
  }
}
