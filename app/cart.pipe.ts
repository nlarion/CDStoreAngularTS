import {Pipe, PipeTransform} from 'angular2/core';
import {Cd} from './cd.model';

@Pipe({
  name: "cart",
  pure: false
})
export class CartPipe implements PipeTransform {
  transform(input: Cd[], args) {
    var desiredDoneState = args[0];
    if(desiredDoneState === "cart") {
      return input.filter((cd) => {
        return cd.cart;
      });
    } else if (desiredDoneState === "notCart") {
      return input.filter((cd) => {
        return !cd.cart;
      });
    } else {
      return input;
    }
  }
}
