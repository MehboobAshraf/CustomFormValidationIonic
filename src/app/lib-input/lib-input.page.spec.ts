import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibInputPage } from './lib-input.page';

describe('LibInputPage', () => {
  let component: LibInputPage;
  let fixture: ComponentFixture<LibInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibInputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
