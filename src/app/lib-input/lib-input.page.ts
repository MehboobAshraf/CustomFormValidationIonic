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
import { ControlValueAccessor, NgControl, FormGroup } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-lib-input',
  templateUrl: './lib-input.page.html',
  styleUrls: ['./lib-input.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibInputPage implements ControlValueAccessor, OnInit {
  constructor(@Optional() @Self() public control: NgControl, private cd: ChangeDetectorRef) {
    control.valueAccessor = this;
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
  @Input() form: FormGroup;
  @Input() username: string;
  @Input() FormControlName: string;
  @Input() placeholder: string;
  @Input() type: string;
  writeValue(value: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  ngOnInit() {
    this.control.statusChanges.pipe(untilDestroyed(this)).subscribe(() => this.cd.detectChanges());
  }
}
