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

  user$: Subscription;

  constructor(private fb: FormBuilder, private authService: AuthService) {
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
    console.warn(this.profileForm.controls["username"].value);
    console.warn(this.profileForm.controls["password"].value);

    this.authService
      .login({
        username: this.profileForm.controls["username"].value,
        password: this.profileForm.controls["password"].value
      })
      .subscribe(u => {
        // this.user$ = u;
        console.log(u);
      });
  }
}
