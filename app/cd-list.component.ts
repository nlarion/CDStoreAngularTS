import { Component, EventEmitter } from 'angular2/core';
import { CdComponent } from './cd.component';
import { Cd } from './cd.model';
import { GenrePipe } from './genre.pipe';
import { CartPipe } from './cart.pipe';
import { CartTotalComponent } from './cart-total.component';

@Component({
  selector: 'cd-list',
  inputs: ['cdList'],
  outputs: ['onCdSelect'],
  pipes: [GenrePipe, CartPipe],
  directives: [CdComponent, CartTotalComponent],
  template: `
    <h4>Filter by Genre</h4>
    <select
    (change) = "onChange($event.target.value)">
      <option value="all" selected="selected"> All Genres</option>
      <option value="Grunge">Grunge</option>
      <option value="Hip-Hop">Hip-Hop</option>
      <option value="Country">Country</option>
      <option value="Pop">Pop</option>
    </select>
    <h4>Show item's in my cart</h4>
    <select
    (change) = "onChange2($event.target.value)">
      <option value="all" selected="selected">All</option>
      <option value="cart">My Cart</option>
    </select>
    <cd-display *ngFor="#currentCd of cdList | genre:filterGenre | cart:filterCart"
    (click)="cdClicked(currentCd)"
    [cd]="currentCd">
    </cd-display>
    <cart-total [cdList]="cdList"></cart-total>
  `
})

export class CdListComponent {
  public cdList: Cd[];
  public onCdSelect: EventEmitter<any>;
  public selectedCd: Cd;
  public filterGenre: string ="all";
  public filterCart: string ="all";
  constructor() {
    this.onCdSelect = new EventEmitter();
  }
  cdClicked(clickedCd: Cd): void {
    console.log('child', clickedCd);
    this.selectedCd = clickedCd;
    this.onCdSelect.emit(clickedCd);
  }
  onChange(filterOption){
    this.filterGenre = filterOption;
  }
  onChange2(filterOption){
    this.filterCart = filterOption;
  }
}
