import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AnimalInfo } from './animal_info.model';

@Component({
  selector: 'animal-list',
  template: `
    <ol>
      <li *ngFor="let currentAnimal of childAnimalList">

      Species: {{currentAnimal.species}} <br>
      Name: {{currentAnimal.name}} <br>
      Age: {{currentAnimal.age}} <br>
      Location: {{currentAnimal.location}} <br>
      Current Caretakers: {{currentAnimal.caretakers}} <br>
      Sex: {{currentAnimal.sex}} <br>
      Likes: {{currentAnimal.likes}} <br>
      Dislikes: {{currentAnimal.dislikes}} <br><br>
      <hr>
    </ol>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: AnimalInfo[];
}
