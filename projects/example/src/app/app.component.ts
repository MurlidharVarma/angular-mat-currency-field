import { MatCurrencyFieldComponent } from '@aipeel/mat-currency-field';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  frm: FormGroup;

  constructor(private fb: FormBuilder){
    this.frm = this.fb.group({
      name: ["Burger"],
      currencyFieldCAD: [{value: 1200, disabled: false}, Validators.required],
      currencyFieldEuro: [{value: 75, disabled: false}, Validators.pattern('^[-]*[0-9]+(\.[0-9]{1,2})?$')],
      currencyFieldINR: [{value: null, disabled: false}],
      currencyField: [{value: null, disabled: false}],
      currencyFieldDisabled: [{value: 99.99, disabled: true}]
    });

  }

  show(): void{
    console.log(this.frm, MatCurrencyFieldComponent);
  }
}
