import { MatCurrencyFieldComponent } from '@aipeel/mat-currency-field';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  frm: FormGroup;

  constructor(private fb: FormBuilder){
    this.frm = this.fb.group({
      name: [],
      currency: [{value: 1231, disabled: false}, Validators.required],
      currency2: [{value: null, disabled: false}],
      currency3: [{value: 99.99, disabled: true}]
    });

  }

  show(): void{
    console.log(this.frm, MatCurrencyFieldComponent);
  }
}
