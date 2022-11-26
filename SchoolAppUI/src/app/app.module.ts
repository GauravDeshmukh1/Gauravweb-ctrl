import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { StudentsComponent } from './students/students.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfessorsComponent } from './professors/professors.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    StudentsComponent,
    ProfileComponent,
    ProfessorsComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    HttpClientModule
  ],
  exports:[
    ProfileComponent,
    NavComponent,
    StudentsComponent,
    DashboardComponent,
    ProfessorsComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
