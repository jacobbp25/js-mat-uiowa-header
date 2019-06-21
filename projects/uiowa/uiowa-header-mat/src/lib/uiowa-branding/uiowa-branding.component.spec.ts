import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiowaBrandingComponent } from './uiowa-branding.component';

describe('UiowaBrandingComponent', () => {
  let component: UiowaBrandingComponent;
  let fixture: ComponentFixture<UiowaBrandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiowaBrandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiowaBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
