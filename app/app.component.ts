import { Component } from '@angular/core';
import { AnimalInfo } from './animal_info.model';

@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
      <div class="jumbotron">
      <h1>{{header}}</h1>
        <animal-list class="info" [childAnimalList]="masterAnimalList" (clickSender)="editAnimalInfo($event)"></animal-list>
        <hr>
            <edit-animal-info class="info" [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishEdit()"></edit-animal-info>
            <new-animal class="info" (newAnimalSender)="addAnimal($event)"></new-animal>
      </div>
  </div>

  `
})

export class AppComponent {
  header: string = 'Animal Information';
  selectedAnimal = null;

  masterAnimalList: AnimalInfo[] = [
    new AnimalInfo('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
    new AnimalInfo('Northwest Black Tailed Bear', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 3, 'Female', 'Delicate chocolate  and leaves', 'Foxes'),
    new AnimalInfo('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the moonlight', 'Toys that are rope-based'),
  ];

  addAnimal (newAnimalFromChild: AnimalInfo) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

  editAnimalInfo(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishEdit() {
    this.selectedAnimal = null;
  }
}
