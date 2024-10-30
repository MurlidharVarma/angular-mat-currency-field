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

## Logs
| Version | Change Logs                                                                                                                                                    |
|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.0.1   | Initial Draft with Angular 10 support                                                                                                                                      |
| 2.0.0   | Upgraded to Angular 12,  Accept Negative value, Decimal digits format configuration, Currency code as space to show no Currency code                               |
| 2.0.1   | Remove the 2 decimal places validation from within library. Validation can be applied from Parent form itself. Updated example project to showcase new feature |
| 3.0.0   | Upgrade to Angular 15 |
| 3.18.0  | Upgrade to Angular 18 |

## NPM Link
https://www.npmjs.com/package/@aipeel/mat-currency-field
