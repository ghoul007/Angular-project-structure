import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComplexComponent } from './complex.component';
import { SubComponent } from './components/sub.component';

@NgModule({
  declarations: [SubComponent, ComplexComponent],
  exports: [SubComponent],
  imports: [CommonModule],
})
export class ComplexModule {}
