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
      Diet: {{currentAnimal.diet}} <br>
      Location: {{currentAnimal.location}} <br>
      Current Caretakers: {{currentAnimal.caretakers}} <br>
      Sex: {{currentAnimal.sex}} <br>
      Likes: {{currentAnimal.likes}} <br>
      Dislikes: {{currentAnimal.dislikes}} <br><br>
      <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
      <hr>
    </ol>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: AnimalInfo[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: AnimalInfo) {
    this.clickSender.emit(animalToEdit);
  }
  
}
