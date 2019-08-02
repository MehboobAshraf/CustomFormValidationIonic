import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Renderer2,
  forwardRef,
  Self,
  Optional,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { ControlValueAccessor, NgControl, FormGroup, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-lib-input',
  templateUrl: './lib-input.page.html',
  styleUrls: ['./lib-input.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: LibInputPage,
      multi: true
    }
  ]
})
export class LibInputPage implements ControlValueAccessor, OnInit {
  value: any;
  onTouched: any;
  onChange: () => any;
  constructor(private cd: ChangeDetectorRef) {
    // control.valueAccessor = this;
  }

  // onChange: any = () => {};
  // onTouch: any = () => {};
  // set value(val) {
  //   if (val !== undefined && this.val !== val) {
  //     this.val = val;
  //     this.onChange(val);
  //     this.onTouch(val);
  //   }
  // }
  @Input() control: FormControl;
  @Input() placeholder: string;
  @Input() type: string;
  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  change($event) {
    console.log($event);
  }
  // setDisabledState?(isDisabled: boolean): void {}

  ngOnInit() {
    // this.control.statusChanges.pipe(untilDestroyed(this)).subscribe(() => this.cd.detectChanges());
  }
}
