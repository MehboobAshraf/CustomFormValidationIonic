import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor(private fb: FormBuilder) {}

  form: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
    // this.name.disable();
  }
  submit() {
    console.log('Form is submitting');
  }

  get name() {
    return this.form.get('name');
  }
}
