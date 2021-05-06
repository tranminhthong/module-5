import {Component, OnInit} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {
  student: Student = {};
  students: Student[] = [];
  status: string;
  isShowFormAdd = false;
  isShowFormEdit = false;
  studentUpdate: Student = {};
  currentIndex = -1;

  constructor() {
  }

  ngOnInit() {
  }

  openFormAdd() {
    this.isShowFormAdd = !this.isShowFormAdd;
  }

  openFormEdit(i: number) {
    this.currentIndex = i;
    this.isShowFormAdd = !this.isShowFormAdd;
    this.isShowFormEdit = !this.isShowFormEdit;
    this.studentUpdate = {
      name: this.students[i].name,
      age: this.students[i].age
    };
  }

  addStudent() {
    this.students.push(this.student);
    this.student = {};
  }

  editStudent(index) {
    this.students[index] = this.studentUpdate;
    this.studentUpdate = {};
  }

  deleteStudent(i: number) {
    this.students.splice(i, 1);
  }

  close() {
    this.isShowFormEdit = !this.isShowFormEdit;
  }
}
