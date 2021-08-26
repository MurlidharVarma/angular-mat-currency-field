# @aipeel/mat-currency-field

Angular Material based currency field. Works with material form field.

![Demo](https://murlidharvarma.github.io/angular-mat-currency-field/projects/mat-currency-field/demo.gif)

## Installation
```
npm install @aiplee/mat-currency-field --save
```

### Import the module
```
import { MatCurrencyFieldModule } from '@aipeel/mat-currency-field';
....

@NgModule({
  declarations: [...],
  imports: [
    ...
    MatCurrencyFieldModule
    ...
  ],
  providers: [...],
})
export class AppModule { }
```
## Usage
<pre>
    &lt;mat-form-field&gt;
      &lt;mat-label&gt;Currency in CAD &lt;\/mat-label&gt;
      
     <span style="background: lightblue; font-weight: bold">&lt;mat-currency-field  formControlName="currency" 
                          placeholder="Enter in CAD" 
                          currencyCode="CAD"&gt;
                          digitsInfo="1.2-2"&gt;
     &lt;/mat-currency-field&gt;</span>

      &lt;mat-error *ngIf="frm.controls.currency.hasError('pattern')"&gt;
        Invalid Format
      &lt;/mat-error&gt;
    &lt;/mat-form-field&gt;
</pre>

## NPM Link
https://www.npmjs.com/package/@aipeel/mat-currency-field