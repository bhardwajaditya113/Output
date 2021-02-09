import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-counter-actions',
  templateUrl: './counter-actions.component.html',
  styleUrls: ['./counter-actions.component.css']
})
export class CounterActionsComponent implements OnInit {
  @Output()
  public incrementEvent = new EventEmitter();
  @Output()
  public decrementEvent = new EventEmitter();
  @Output()
  public setValueEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementAction(){
    alert('incrementAction called');
    this.incrementEvent.emit();
  }

  decrementAction(){
    alert('decrementAction called');
    this.decrementEvent.emit();
  }

  resetValueAction(){
    var val = 0;
    this.setValueEvent.emit(val);
  }



}
