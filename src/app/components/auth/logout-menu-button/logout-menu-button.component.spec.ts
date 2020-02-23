import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutMenuButtonComponent } from './logout-menu-button.component';

describe('LogoutMenuButtonComponent', () => {
  let component: LogoutMenuButtonComponent;
  let fixture: ComponentFixture<LogoutMenuButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutMenuButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
