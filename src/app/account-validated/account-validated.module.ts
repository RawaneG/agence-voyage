import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountValidatedRoutingModule } from './account-validated-routing.module';
import { AccountValidatedComponent } from './account-validated.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations:
  [
    AccountValidatedComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    AccountValidatedRoutingModule
  ]
})
export class AccountValidatedModule { }
