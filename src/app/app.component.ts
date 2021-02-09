import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public counter: number;

  constructor(){}

  ngOnInit(): void{
    this.counter = 0;
  }

  increment(){
    this.counter = this.counter + 1;
  }

  decrement(){
    this.counter = this.counter - 1;
  }

  setCounter(counterValue: number){
    this.counter = counterValue;
  }
}
