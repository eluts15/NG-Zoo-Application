import { Component, Output, EventEmitter } from '@angular/core';
import { AnimalInfo } from './animal_info.model';

@Component ({
  selector: 'new-animal',
  template: `
    <h1>Add a new animal below.</h1>
    <div>
      <p>Please fill in the required fields.</p>
      <hr>

      <label>Enter the species:</label><br>
      <input #newSpecies><br><br>

      <label>Enter Name: </label><br>
      <input #newName><br><br>

      <label>Enter Age of this Animal: </label><br>
      <input #newAge><br><br>


      <label>Enter Native Climate/Region </label><br>
      <input #newLocation><br><br>


      <label>Enter number of Caretakers: </label><br>
      <input #newCaretakers><br><br>

      <label>Male or Female? </label><br>
      <input #newSex><br><br>

      <label>Likes? </label><br>
      <input #newLikes><br><br>

      <label>Dislikes? </label><br>
      <input #newDislikes><br><br>
    </div>

    <div>
      <label>Animal Diet:</label>
      <select #newDiet>
        <option [value]="1"> Carnivore</option>
        <option [value]="2"> Herbivore</option>
        <option [value]="3"> Omnivore</option>
      </select>

      <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value);

      newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add/Update</button>
      
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(newSpecies: string, newName: string, newAge: number, newDiet: string, newLocation: string, newCaretakers: number, newSex: string, newLikes: string, newDislikes: string) {
    var newAnimalToAdd: AnimalInfo = new AnimalInfo(newSpecies, newName, newAge, newDiet, newLocation, newCaretakers, newSex, newLikes, newDislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}