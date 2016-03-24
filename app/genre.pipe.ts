import {Pipe, PipeTransform} from 'angular2/core';
import {Cd} from './cd.model';

@Pipe({
  name: "genre",
  pure: false
})

export class GenrePipe implements PipeTransform {
  transform(input: Cd[], args) {
    var desriedGenreState = args[0];
    if (desriedGenreState === "all") {
      return input;
    } else {
      return input.filter((cd) => {
        return cd.genre === desriedGenreState;
      })
    }
  }
}
