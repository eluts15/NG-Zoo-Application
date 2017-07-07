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

    <ol>
      <li *ngFor="let currentAnimal of childAnimalList |filterBy:filterByAge">
        Species: {{currentAnimal.species}} <br>
        Name: {{currentAnimal.name}} <br>
        Age: {{currentAnimal.age}} <br>
        Diet: {{currentAnimal.diet}} <br>
        Current Zoo Location: {{currentAnimal.location}} <br>
        Current Number of Caretakers: {{currentAnimal.caretakers}} <br>
        Sex: {{currentAnimal.sex}} <br>
        Likes: {{currentAnimal.likes}} <br>
        Dislikes: {{currentAnimal.dislikes}} <br><br>
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button></li>
      <hr>
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
