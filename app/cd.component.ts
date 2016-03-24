import { Component, EventEmitter } from 'angular2/core';
import { Cd } from './cd.model';

@Component({
  selector: 'cd-display',
  inputs:['cd'],
  template: `
  <h3>{{ cd.album }}</h3>
  <ul>
    <li>{{ cd.artist }}</li>
    <li>{{ cd.price }}</li>
    <li>{{ cd.genre }}</li>
  </ul>
  `
})
export class CdComponent {
  public cd : Cd;
}
