import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

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

  constructor(private fb: FormBuilder) {
    this.profileForm = this.createFormGroupWithBuilder(fb);
  }

  ngOnInit() {}
  onSubmit() {
    console.warn(this.profileForm.controls["username"].value);
    console.warn(this.profileForm.controls["password"].value);
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
}
