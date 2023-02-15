import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountValidatedComponent } from './account-validated.component';

describe('AccountValidatedComponent', () => {
  let component: AccountValidatedComponent;
  let fixture: ComponentFixture<AccountValidatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountValidatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountValidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
