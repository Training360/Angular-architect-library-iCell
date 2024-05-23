/* eslint-disable @typescript-eslint/ban-types */
import { Component, Input } from '@angular/core';
import { CommonModule, LowerCasePipe } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'icell-country-selector',
  standalone: true,
  imports: [
    CommonModule,
    LowerCasePipe,
  ],
  templateUrl: './country-selector.component.html',
  styleUrl: './country-selector.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CountrySelectorComponent,
      multi: true,
    },
  ],
})
export class CountrySelectorComponent implements ControlValueAccessor {

  @Input() countries = [
    { code: 'HU', name: 'HUN' },
    { code : 'US', name: 'USA' },
    { code: 'NL', name: 'NLD' },
    { code: 'JM', name: 'JAM' },
    { code: 'SZ', name: 'SWZ' },
  ];

  selected!: string;

  disabled = false;

  private onTouched!: Function;
  private onChanged!: Function;

  selectCountry(code: string) {
    this.onTouched();
    this.selected = code;
    this.onChanged(code);
  }

  writeValue(value: string): void {
    this.selected = value;
  }

  registerOnChange(fn: Function): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
