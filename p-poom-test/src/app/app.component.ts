import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CompaComponent } from './compa/compa.component';
import { CompbComponent } from './compb/compb.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'p-poom-test';
  msgFromChild1: any;

  currentMsgFromChild1ToChild2: any;

  fwdMsgToSib2($event: any) {
    this.currentMsgFromChild1ToChild2 = $event;
  }
}
