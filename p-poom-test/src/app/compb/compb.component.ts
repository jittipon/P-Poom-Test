import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-compb',
  templateUrl: './compb.component.html',
  styleUrls: ['./compb.component.scss']
})
export class CompbComponent implements OnChanges {

  @Input()
  currentMsgFromChild1ToChild2!: string;

  ngOnChanges() {
    this.addTodo(this.currentMsgFromChild1ToChild2);
  }

  todolist = ['sleep', 'eat', 'code', 'repeat'];

  addTodo(newTodo: string): void {
    if (newTodo) {
      this.todolist.push(newTodo);
    }
  }


}