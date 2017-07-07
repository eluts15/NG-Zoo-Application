import { Component } from '@angular/core';
import { AnimalInfo } from './animal_info.model.model';

@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
    <h3>{{header}}</h3>
  `
})

export class AppComponent {
  header: string = 'Hello World!';
}
