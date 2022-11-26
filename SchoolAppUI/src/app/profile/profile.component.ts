import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { StudentsComponentModule } from '../students/students.component';
import { NavComponentModule } from '../nav/nav.component';
// import { ProfileComponentModule } from '../profile/profile.component';
import { ProfessorsComponentModule } from '../professors/professors.component';
import { DashboardComponentModule } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title="Profile";

  constructor() { }

  ngOnInit(): void {
  }

}



@NgModule({
  imports:[CommonModule,
    StudentsComponentModule,
    NavComponentModule,
    ProfessorsComponentModule,
    DashboardComponentModule],
  declarations:[ProfileComponent]
})
export class ProfileComponentModule{}
