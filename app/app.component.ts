import { Component, EventEmitter } from 'angular2/core';
import { Cd } from './cd.model';
import { CdComponent } from './cd.component';
import { CartPipe } from './cart.pipe';
import { CdListComponent } from './cd-list.component';

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
