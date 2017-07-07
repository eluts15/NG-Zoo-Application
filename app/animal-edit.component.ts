import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AnimalInfo } from  './animal_info.model';

@Component ({
  selector: 'edit-animal-info',
  template: `
    <div>
      <div *ngIf="childSelectedAnimal">
      <h3>{{childSelectedAnimal.name}}</h3>
      <hr>
      <h3>Edit Animal Information</h3>
      <label>Name:</label>
      <input [(ngModel)]="childSelectedAnimal.name">
      <label>Number of Caretakers:</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers">
      <label>Age:</label>
      <input [(ngModel)]="childSelectedAnimal.age">
      <label>Zoo Relocation:</label>
      <input [(ngModel)]="childSelectedAnimal.location">
      <button (click)="doneButtonClicked()">Save</button>
      </div>
    </div>
  `
})


export class EditAnimalInfoComponent {

  @Input() childSelectedAnimal: AnimalInfo;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
