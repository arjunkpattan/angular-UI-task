import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratnComponent } from './registratn.component';

describe('RegistratnComponent', () => {
  let component: RegistratnComponent;
  let fixture: ComponentFixture<RegistratnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistratnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistratnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
