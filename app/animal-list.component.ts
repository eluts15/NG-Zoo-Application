import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AnimalInfo } from './animal_info.model';

@Component({
  selector: 'animal-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All Animals</option>
      <option value="young">Young Animals</option>
      <option value="adult" selected="selected">Adult Animals</option>
    </select>

    <ol class="list-group">
      <li class="list-group-item" *ngFor="let currentAnimal of childAnimalList | filterBy:filterByAge">
        <strong>Species:</strong> {{currentAnimal.species}}<br>
        <strong>Name:</strong> {{currentAnimal.name}}<br>
        <strong>Age:</strong> {{currentAnimal.age}}<br>
        <strong>Diet:</strong> {{currentAnimal.diet}}<br>
        <strong>Current Zoo Location:</strong> {{currentAnimal.location}}<br>
        Current Number of Caretakers: {{currentAnimal.caretakers}}<br>
        Sex: {{currentAnimal.sex}}<br>
        Likes: {{currentAnimal.likes}}<br>
        Dislikes: {{currentAnimal.dislikes}}<br><br>
        <button class="btn-primary" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button></li>
    </ol>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: AnimalInfo[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "adult";

  editButtonHasBeenClicked(animalToEdit: AnimalInfo) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

}
