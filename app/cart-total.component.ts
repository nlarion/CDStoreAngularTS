import {Component} from 'angular2/core';
import {Cd} from './cd.model';

@Component({
  selector: 'cart-total',
  inputs: ['cdList'],
  template: `
  <h3>Your Total: $ {{ totalPrice() }}</h3>
  `
})
export class CartTotalComponent {
  public cdList: Cd[];

  totalPrice(){
    var total = 0;
    for(var i = 0; i < this.cdList.length; i++){
       if(this.cdList[i].cart === true){
          total += this.cdList[i].price;
       }
    }
    console.log(total);
    return total;
  }
}
