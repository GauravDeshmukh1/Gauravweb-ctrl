import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component,Input, OnInit } from '@angular/core';
import { DashboardComponentModule } from '../dashboard/dashboard.component';
import { NavComponentModule } from '../nav/nav.component';
import { ProfessorsComponentModule } from '../professors/professors.component';
import { ProfileComponentModule } from '../profile/profile.component';
import { StudentsComponentModule } from '../students/students.component';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() title!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
@NgModule({
  imports:[CommonModule,
    NavComponentModule,
    ProfessorsComponentModule,
    ProfileComponentModule,
    StudentsComponentModule,
    DashboardComponentModule],
  declarations:[TitleComponent],
})
export class TitleComponentModule{}