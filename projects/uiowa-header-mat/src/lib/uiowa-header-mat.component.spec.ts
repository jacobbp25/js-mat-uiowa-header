import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiowaHeaderMatComponent } from './uiowa-header-mat.component';

describe('UiowaHeaderMatComponent', () => {
  let component: UiowaHeaderMatComponent;
  let fixture: ComponentFixture<UiowaHeaderMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiowaHeaderMatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiowaHeaderMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
