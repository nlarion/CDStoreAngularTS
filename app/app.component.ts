import { Component, EventEmitter } from 'angular2/core';
import { Cd } from './cd.model';
import { CdComponent } from './cd.component';
import { CartPipe } from './cart.pipe';
import { CdListComponent } from './cd-list.component';
import { CartListComponent } from './cart-list.component';

@Component({
  selector: 'my-app',
  directives: [CdListComponent, CartListComponent],
  template:`
    <div class="container">
      <h1>This CD Store</h1>
      <hr>
      <div class="row">
        <div class="col-sm-6">
          <cd-list
            [cdList]="cds"
            (onCdSelect)="cdWasSelected($event)">
          </cd-list>
        </div>
        <div class="col-sm-6">
          <cart-list
            [cdList]="cds"
            (onCdSelect)="cdWasSelected($event)">
          </cart-list>
        </div>
      </div>
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
