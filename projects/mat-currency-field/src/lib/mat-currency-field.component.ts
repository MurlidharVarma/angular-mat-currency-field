import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CurrencyPipe } from '@angular/common';
import { Component, ElementRef, HostBinding, Input, OnDestroy, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NgControl, NG_VALIDATORS, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';

/**
 * To validate that Currency follows the regex patterm
 */
// tslint:disable-next-line:typedef
export function currencyValidation(c) {
  const validation =  Validators.pattern('^[-]*[0-9]+(\.[0-9]{1,2})?$')(c);
  return validation;
}


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mat-currency-field',
  template: `
          <ng-container >
              <input *ngIf="!isEdit && !errorState" (focus)="doFocus()" matInput type="text" [(ngModel)]="curr" [disabled]="disabled" />
              <input *ngIf="(isEdit || errorState)" (blur)="doBlur()" matInput type="text" [(ngModel)]="currVal" (input)="_handleInput()"
                      [placeholder]="_placeholder" [disabled]="disabled"/>
          </ng-container>
  `,
  styles: [
  ],
  providers: [
    {
      provide: CurrencyPipe
    },
    {
      provide: MatFormFieldControl,
      useExisting: MatCurrencyFieldComponent
    },
    {
      provide: NG_VALIDATORS,
      useValue: currencyValidation,
      multi: true
    }
  ]
})
export class MatCurrencyFieldComponent implements OnDestroy, MatFormFieldControl<string>, ControlValueAccessor {

  static nextId = 0;

  currVal: string;
  curr: string;
  digits: string;

  currCode = 'code';
  isEdit = false;

  stateChanges: Subject<void> = new Subject<void>();
  focused: boolean;
  controlType?: string;
  autofilled?: boolean;

  @HostBinding('attr.aria-describedby')
  describedBy = 'Currency field';

  @HostBinding()
  id = `currency-input-${MatCurrencyFieldComponent.nextId++}`;

  @HostBinding('class.floating')
  get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  get empty(): boolean {
    return !(this.currVal && this.currVal != null);
  }

  // Currency Code as property binding
  @Input()
  get currencyCode(): string{
    return this.currCode;
  }
  set currencyCode(val){
    if (val && val != null) {
      if (val.trim().length > 0) {
        this.currCode = `${val.toUpperCase()} `;
      } else {
        this.currCode = ' ';
      }
    } else {
      this.currCode = 'code';
    }
    this.stateChanges.next();
  }

  // Digits Info
  @Input()
  get digitsInfo(): string{
    return this.digits;
  }
  set digitsInfo(val){
    if (val && val != null && val.trim().length > 0){
      this.digits = val;
    } else {
      this.digits = null;
    }
    this.stateChanges.next();
  }

  // Currency Value as property binding
  @Input()
  get value(): string {
    return this.currVal;
  }
  set value(val) {
    this.currVal = val ? val : null;
    try {
      this.curr = this.currencyPipe.transform(` ${parseFloat(val)}`, null, this.currCode, this.digits);
    } catch (err) {
      this.curr = null;
    }
    this.stateChanges.next();
  }

  // Placeholder as property binding
  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }
  // tslint:disable-next-line:variable-name
  protected _placeholder: string;

  // errorState
  @Input()
  get errorState(): boolean {
    if (this.ngControl.control) {
      return this.ngControl.control.errors !== null && this.ngControl.control.touched;
    } else {
      return false;
    }
  }
  set errorState(errState) {
    this._errorState = errState;
    this.stateChanges.next();
  }
  // tslint:disable-next-line:variable-name
  private _errorState: boolean;

  // Required property binding
  @Input()
  get required(): boolean{
    return this._required;
  }
  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }
  // tslint:disable-next-line:variable-name
  private _required = false;

  // Disabled property binding
  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  // tslint:disable-next-line:variable-name
  private _disabled = false;


  onChange = (_: any) => { };
  onTouch = () => { };

  constructor(@Optional() @Self() public ngControl: NgControl,
              private fm: FocusMonitor,
              private elRef: ElementRef<HTMLElement>,
              private fb: FormBuilder,
              private currencyPipe: CurrencyPipe) {

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    fm.monitor(elRef.nativeElement, true).subscribe(origin => {

      setTimeout(() => {
        this.focused = !!origin;
        if (this.focused && !origin) {
          this.onTouch();
        }
        this.stateChanges.next();
      });
    });
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
  }

  writeValue(val: any): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent): void {
    if (!this.disabled){
      this.doFocus();
    }
  }

  _handleInput(): void {
    this.value = this.value;
    this.onChange(this.value);
  }

  doFocus(): void {
    this.isEdit = true;
    setTimeout(() => {
      this.elRef.nativeElement.querySelector('input').focus();
      this.onTouch();
    });
  }

  doBlur(): void {
    this.isEdit = false;
  }
}
