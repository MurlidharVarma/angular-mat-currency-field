import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCurrencyFieldComponent } from './mat-currency-field.component';


@NgModule({
  declarations: [MatCurrencyFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [MatCurrencyFieldComponent],
})
export class MatCurrencyFieldModule { }
