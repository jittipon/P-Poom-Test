import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compa',
  templateUrl: './compa.component.html',
  styleUrls: ['./compa.component.scss']
})
export class CompaComponent {

  @Output() msgToSibling = new EventEmitter<any>();

  currentMsgToSibling = '';

  msgFromChild1 = []

  msgToSib() {
    this.msgToSibling.emit(this.currentMsgToSibling);
  }

  // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  // addHero(newHero: string) {
  //   if (newHero) {
  //     this.heroes.push(newHero);
  //   }
  // }

}
