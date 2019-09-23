import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubComponent } from './components/sub.component';
import { ComplexComponent } from './complex.component';



@NgModule({
  declarations: [SubComponent, ComplexComponent],
  exports: [SubComponent],
  imports: [
    CommonModule
  ]
})
export class ComplexModule { }
