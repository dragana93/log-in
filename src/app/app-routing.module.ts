import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LogInComponent } from "./nav/log-in/log-in.component";
import { SignUpComponent } from "./nav/sign-up/sign-up.component";
import { DashboardComponent } from "./nav/dashboard/dashboard.component";
import { PageNotFoundComponent } from "./nav/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "/log-in", pathMatch: "full" },
  {
    path: "log-in",
    component: LogInComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      }
    ]
  },
  { path: "sign-up", component: SignUpComponent },
  { path: "**", component: PageNotFoundComponent }
  // {
  //   path: "dashboard",
  //   component: DashboardComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
    // RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  LogInComponent,
  SignUpComponent,
  DashboardComponent,
  PageNotFoundComponent
];
