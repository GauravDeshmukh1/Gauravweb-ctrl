import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { StudentsComponentModule } from '../students/students.component';
import { NavComponentModule } from '../nav/nav.component';
import { ProfileComponentModule } from '../profile/profile.component';
import { ProfessorsComponentModule } from '../professors/professors.component';
// import { DashboardComponentModule } from '../dashboard/dashboard.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Home';

  constructor() { }

  ngOnInit() {
  }

}
@NgModule({
  imports:[CommonModule,
  StudentsComponentModule,
NavComponentModule,
ProfessorsComponentModule,
ProfileComponentModule,
],
  
  declarations:[DashboardComponent],
})
export class DashboardComponentModule{}