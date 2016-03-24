import { Component, EventEmitter } from 'angular2/core';
import { CdComponent } from './cd.component';
import { Cd } from './cd.model';
import { GenrePipe } from './genre.pipe';
import { CartPipe } from './cart.pipe';

@Component({
  selector: 'cd-list',
  inputs: ['cdList'],
  outputs: ['onCdSelect'],
  pipes: [GenrePipe],
  directives: [CdComponent],
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
    <cd-display *ngFor="#currentCd of cdList | genre:filterGenre"
    (click)="cdClicked(currentCd)"
    [cd]="currentCd">
    </cd-display>
  `
})

export class CdListComponent {
  public cdList: Cd[];
  public onCdSelect: EventEmitter<any>;
  public selectedCd: Cd;
  public filterGenre: string ="all";
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
}
