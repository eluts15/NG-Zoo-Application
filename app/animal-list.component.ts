import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AnimalInfo } from './animal_info.model';

@Component({
  selector: 'animal-list',
  template: `
    <ul>
      <li *ngFor="let currentAnimal of childAnimalList"> {{currentAnimal.species}} {{currentAnimal.name}} {{currentAnimal.age}} {{currentAnimal.location}} {{currentAnimal.caretakers}} {{currentAnimal.sex}} {{currentAnimal.likes}} {{currentAnimal.dislikes}}
    </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: AnimalInfo[];
}
