import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/app.component';
import { PlaceAppointmentComponent } from './Components/place-appointment/place-appointment.component';
import { ViewAppointmentComponent } from './Components/view-appointment/view-appointment.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PlaceAppointmentComponent,
    ViewAppointmentComponent,
    ContactUsComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
