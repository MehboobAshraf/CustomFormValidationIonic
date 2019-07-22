import { Component, OnInit, ViewChild, Input, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-lib-input',
  templateUrl: './lib-input.page.html',
  styleUrls: ['./lib-input.page.scss']
})
export class LibInputPage implements ControlValueAccessor {
  @ViewChild('input') input;
  writeValue(value: any): void {
    const div = this.input.nativeElement;
    this.renderer.setProperty(div, 'textContent', value);
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  constructor(private renderer: Renderer2) {}

  // ngOnInit() {
  // }
}
