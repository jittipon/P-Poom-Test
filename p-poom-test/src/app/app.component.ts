import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'p-poom-test';

  currentMsgFromChild1ToChild2!: string;

  fwdMsgToSib2($event: string): void {
    this.currentMsgFromChild1ToChild2 = $event;
  }
}
