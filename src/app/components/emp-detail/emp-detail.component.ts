import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {
  @Input("empData")
  public employee: Employee;

  constructor() { }

  ngOnInit(): void {
  }

}
