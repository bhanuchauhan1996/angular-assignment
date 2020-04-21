import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Assignment2Component } from './containers/assignment2.component';

@NgModule({
  declarations: [
    Assignment2Component
  ],
  exports: [
    Assignment2Component
  ],
   imports:[CommonModule]
})
export class Assignment2Module {

}
