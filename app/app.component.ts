import { Component, EventEmitter } from 'angular2/core';
import { Cd } from './cd.model';

@Component({
  selector: 'cd-list',
  inputs: ['cdList'],
  outputs: ['onCdSelect'],
  template: `
    <h3 *ngFor="#currentCd of cdList" (click)="cdClicked(currentCd)">
      {{ currentCd.album }}
    </h3>
  `
})

export class CdListComponent {
  public cdList: Cd[];
  public onCdSelect: EventEmitter<any>;
  constructor() {
    this.onCdSelect = new EventEmitter();
  }
  cdClicked(clickedCd: Cd): void {
    console.log('child', clickedCd);
    this.onCdSelect.emit(clickedCd);
  }
}

@Component({
  selector: 'my-app',
  directives: [CdListComponent],
  template:`
    <div class="container">
      <h1>This CD Store</h1>
      <hr>
      <cd-list
        [cdList]="cds"
        (onCdSelect)="cdWasSelected($event)">
      </cd-list>
    </div>
  `
})

export class AppComponent{
  public cds: Cd[];
  constructor(){
    this.cds = [
      new Cd("Nevermind", "Nirvana", 8, "Grunge"),
      new Cd("2legit", "MC Hammer", 1, "Hip-Hop"),
      new Cd("3030", "Deltron", 9, "Hip-Hop"),
      new Cd("Rhinestone Cowboy", "Glen Campbell", 7, "Country"),
      new Cd("Anti", "Rihanna", 12, "Pop"),
      new Cd("Best of Bob Marley", "Bob Marley", 13, "Reggae")
    ];
  }
  cdWasSelected(clickedCd: Cd): void{
    console.log('parent', clickedCd);
  }
}
