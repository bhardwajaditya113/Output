import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  public employee: Employee;
  public empList: Employee[];

  constructor() { }

  ngOnInit(): void {
    this.employee = {id: null, name: 'Aditya Bhardwaj', age: null},
    this.empList = [
      {id: 101, name: 'Aditya', age: 28},
      {id: 102, name: 'Vaishali', age: 26},
      {id: 103, name: 'Vivek', age: 50}
    ];
  }

  public viewEmployee(empId: number): void{
    var empDetail = this.empList.find(emp => emp.id === empId);
    this.employee = Object.assign({}, empDetail);
  }

}
