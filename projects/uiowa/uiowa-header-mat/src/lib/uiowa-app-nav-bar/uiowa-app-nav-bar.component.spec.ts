import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiowaAppNavBarComponent } from './uiowa-app-nav-bar.component';

describe('UiowaAppNavBarComponent', () => {
  let component: UiowaAppNavBarComponent;
  let fixture: ComponentFixture<UiowaAppNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiowaAppNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiowaAppNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
