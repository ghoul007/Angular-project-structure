import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComplexModule } from './components/complex-component-example/complex.module';
import { SimpleComponent } from './components/simple-component-example/simple.component';

const EXPORT_COMPONENTS = [SimpleComponent];

const PIPES = [];

const MODULES = [ComplexModule];

@NgModule({
  declarations: [...EXPORT_COMPONENTS, ...PIPES],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...MODULES],
  exports: [...EXPORT_COMPONENTS, ...PIPES],
  entryComponents: [],
  providers: [],
})
export class SharedModule {}
