import { ProfessorService } from './professor.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// import { BsModalRef , BsModalService } from 'ngx-bootstrap/modal'
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponentModule } from '../students/students.component';
import { NavComponentModule } from '../nav/nav.component';
import { ProfileComponentModule } from '../profile/profile.component';
// import { ProfessorsComponentModule } from '../professors/professors.component';
import { DashboardComponentModule } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css'],
})
export class ProfessorsComponent implements OnInit {

  titulo = 'Professors';
  public professorSelected!: Professor;
  public modalRef!: BsModalRef;
  public professorForm!: FormGroup;

  public professors!: Professor[];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService,
              private professorService: ProfessorService) {
    this.createForm();
  }

  ngOnInit() {
    this.loadProfessors();
  }

  createForm() {
    this.professorForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
    });
  }

  saveProfessor(professor: Professor){
    this.professorService.put(professor.id, professor).subscribe(
      (ret: any) => {
        console.log(ret);
        this.loadProfessors();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  professorSubmit(){
    this.saveProfessor(this.professorForm.value);
  }

  professorSelect(professor: Professor){
    this.professorSelected = professor;
    this.professorForm.patchValue(professor);
  }

  loadProfessors(){
    this.professorService.getAll().subscribe(
      (professors: Professor[]) => {
        this.professors = professors;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  back() {
    this.professorSelected = null!;
  }

}
@NgModule({
  imports:[CommonModule,
    StudentsComponentModule,
    NavComponentModule,
    ProfileComponentModule,
    DashboardComponentModule],
  declarations:[ProfessorsComponent],
})
export class ProfessorsComponentModule{}