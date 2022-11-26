import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { StudentsComponent } from '../students/students.component';
import { StudentsComponentModule } from '../students/students.component';
// import { NavComponentModule } from '../nav/nav.component';
import { ProfileComponentModule } from '../profile/profile.component';
import { ProfessorsComponentModule } from '../professors/professors.component';
import { DashboardComponentModule } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports:[CommonModule,
    StudentsComponentModule,
    ProfessorsComponentModule,
    ProfileComponentModule,
    DashboardComponentModule],
  declarations:[NavComponent],
})
export class NavComponentModule{}