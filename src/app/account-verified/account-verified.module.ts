import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountVerifiedRoutingModule } from './account-verified-routing.module';
import { AccountVerifiedComponent } from './account-verified.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AccountVerifiedComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    AccountVerifiedRoutingModule
  ]
})
export class AccountVerifiedModule { }
