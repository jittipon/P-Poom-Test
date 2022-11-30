import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compa',
  templateUrl: './compa.component.html',
  styleUrls: ['./compa.component.scss']
})
export class CompaComponent {

  @Output() msgToSibling = new EventEmitter<string>();

  currentMsgToSibling = '';

  msgToSib(): void {
    this.msgToSibling.emit(this.currentMsgToSibling);
  }

}
