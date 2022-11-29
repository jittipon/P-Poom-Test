import { Component, Input, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-compb',
  templateUrl: './compb.component.html',
  styleUrls: ['./compb.component.scss']
})
export class CompbComponent {

  @Input()
  currentMsgFromChild1ToChild2: any[] = [];

  ngOnChanges() {
    console.log('currentMsgFromChild1ToChild2', this.currentMsgFromChild1ToChild2);
    this.addTodo(this.currentMsgFromChild1ToChild2);

  }

  todolist = ['sleep', 'eat', 'code', 'repeat'];

  addTodo(newTodo: any) {
    if (newTodo) {
      this.todolist.push(newTodo);
    }
  }

}
