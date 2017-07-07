import { Pipe, PipeTransform } from '@angular/core';
import { AnimalInfo } from './animal_info.model';

@Pipe({
  name: "filterBy",
  pure: false, //set this to false for now.
})

export class FilterByAgePipe implements PipeTransform {

  transform(input: AnimalInfo[], filteredAge) {
    var output: AnimalInfo[] = [];
    if(filteredAge === "young") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;

    } else if (filteredAge === "adult") {
        for(var i = 0; i < input.length; i++) {
          if (input[i].age > 2) {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
  }
}
