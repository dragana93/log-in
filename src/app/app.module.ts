import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./nav/navbar/navbar.component";
import { LogInModule } from "./log-in/log-in.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LogInComponent } from "./nav/log-in/log-in.component";
import { RouterModule, Routes } from "@angular/router";
import { SignUpComponent } from './nav/sign-up/sign-up.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, LogInComponent, SignUpComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LogInModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
