import { StudentService } from './student.service';
import { Component, NgModule, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Student } from '../models/Student';
import { CommonModule } from '@angular/common';
// import { StudentsComponentModule } from '../students/students.component';
import { NavComponentModule } from '../nav/nav.component';
import { ProfileComponentModule } from '../profile/profile.component';
import { ProfessorsComponentModule } from '../professors/professors.component';
import { DashboardComponentModule } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  public modalRef!: BsModalRef;
  public studentForm!: FormGroup;
  public title = 'Students';
  public studentSelected!: Student;

  public students!: Student[];
  public student!: Student;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService,
              private studentService: StudentService) {
    this.createForm();
   }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(){
    this.studentService.getAll().subscribe(
      (students: Student[]) => {
        this.students = students;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  createForm() {
    this.studentForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      telephone: ['', Validators.required]
    });
  }

  saveStudent(student: Student){
    this.studentService.put(student.id, student).subscribe(
      (student: any) => {
        console.log(student);
        this.loadStudents();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  studentSubmit(){
    this.saveStudent(this.studentForm.value);
  }

  studentSelect(student: Student){
    this.studentSelected = student;
    this.studentForm.patchValue(student);
  }

  back(){
    this.studentSelected = null!;
  }



}

@NgModule({
  imports:[CommonModule,
    NavComponentModule,
    ProfessorsComponentModule,
    ProfileComponentModule,
    DashboardComponentModule],
  declarations:[StudentsComponent],
})
export class StudentsComponentModule{}
