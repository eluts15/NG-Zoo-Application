import { Component, Output, EventEmitter } from '@angular/core';
import { AnimalInfo } from './animal_info.model';

@Component ({
  selector: 'new-animal',
  template: `
    <h1>Add a new animal below.</h1>
    <div class="addAnimal">
      <p>Please fill in the required fields.</p>
      <hr>

      <label class="addAnimalInfo">Enter the species:</label><br>
      <input #newSpecies><br><br>

      <label class="addAnimalInfo">Enter Name: </label><br>
      <input #newName><br><br>

      <label class="addAnimalInfo">Enter Age of this Animal: </label><br>
      <input #newAge><br><br>


      <label class="addAnimalInfo">Enter Zoo Location: </label><br>
      <input #newLocation><br><br>


      <label class="addAnimalInfo">Enter number of Caretakers: </label><br>
      <input #newCaretakers><br><br>

      <label class="addAnimalInfo">Male or Female? </label><br>
      <input #newSex><br><br>

      <label class="addAnimalInfo">Likes? </label><br>
      <input #newLikes><br><br>

      <label class="addAnimalInfo">Dislikes? </label><br>
      <input #newDislikes><br><br>
    </div>

    <div>
      <label class="addAnimal">Animal Diet:</label>
      <select #newDiet>
        <option [value]="'Carnivore'"> Carnivore</option>
        <option [value]="'Herbivore'"> Herbivore</option>
        <option [value]="'Omnivore'"> Omnivore</option>
      </select>

      <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value);
      newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
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
