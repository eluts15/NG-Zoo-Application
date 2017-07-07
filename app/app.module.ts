import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AnimalListComponent } from './animal-list.component';
import { NewAnimalComponent } from './new-animal.component';
import { EditAnimalInfoComponent } from './animal-edit.component';
import { FilterByAgePipe } from './filterByAge.pipe';

@NgModule ({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  AnimalListComponent,
                  NewAnimalComponent,
                  EditAnimalInfoComponent,
                  FilterByAgePipe,
  ],

  bootstrap: [ AppComponent ]
})

export class AppModule { }
