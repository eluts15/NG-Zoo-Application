import { Component } from '@angular/core';
import { AnimalInfo } from './animal_info.model.model';

@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
    <h3>{{header}}</h3>
    <animal-list></animal-list>
    <edit-animal></edit-animal>
    <add-animal></add-animal>
  `
})

export class AppComponent {
  header: string = 'Hello World!';
  selectedAnimal = null;

  masterAnimalList: AnimalInfo[] = [
    new AnimalInfo('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
    new AnimalInfo('Northwest Black Tailed Bear', 'Tinkerbell', 6, 'Herbivore', 'Northern Trail', 3, 'Female', 'Delicate chocolate  and leaves', 'Foxes'),
  ];

  addAnimal (newAnimalFromChild: AnimalInfo) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
