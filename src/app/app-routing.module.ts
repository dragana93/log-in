import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LogInComponent } from "./nav/log-in/log-in.component";
import { SignUpComponent } from "./nav/sign-up/sign-up.component";

const routes: Routes = [
  { path: "log-in", component: LogInComponent },
  { path: "sign-up", component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
