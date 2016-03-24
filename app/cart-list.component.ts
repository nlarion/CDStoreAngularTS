import { Component, EventEmitter } from 'angular2/core';
import { CdComponent } from './cd.component';
import { Cd } from './cd.model';
import { CartPipe } from './cart.pipe';
import { CartTotalComponent } from './cart-total.component';
import { CartDisplayComponent } from './cart-display.component';

@Component({
  selector: 'cart-list',
  inputs: ['cdList'],
  outputs: ['onCdSelect'],
  pipes: [CartPipe],
  directives: [CartTotalComponent, CartDisplayComponent],
  template: `
    <h4>Items in my cart</h4>
    <cart-display *ngFor="#currentCd of cdList | cart:filterCart"
    (click)="cdClicked(currentCd)"
    [cd]="currentCd">
    </cart-display>
    <cart-total [cdList]="cdList"></cart-total>
    <button type="button" class="btn btn-success"
    (click)="purchase()">Purchase</button>
  `
})

export class CartListComponent {
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
  onChange2(filterOption){
    this.filterCart = filterOption;
  }
  purchase(){
    var ccInfo = prompt("Please enter your credit card info");
    alert("We will store card number " + ccInfo + " in  safe place");
  }
}
