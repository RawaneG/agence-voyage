import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeValidationComponent } from './charge-validation.component';

describe('ChargeValidationComponent', () => {
  let component: ChargeValidationComponent;
  let fixture: ComponentFixture<ChargeValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargeValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargeValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
