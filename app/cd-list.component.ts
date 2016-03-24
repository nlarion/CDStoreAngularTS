import { Component, EventEmitter } from 'angular2/core';
import { CdComponent } from './cd.component';
import { Cd } from './cd.model';

@Component({
  selector: 'cd-list',
  inputs: ['cdList'],
  outputs: ['onCdSelect'],
  directives: [CdComponent],
  template: `
    <cd-display *ngFor="#currentCd of cdList" (click)="cdClicked(currentCd)" [cd]="currentCd">
    </cd-display>
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
