import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    AccountRoutingModule,
  ]
})
export class AccountModule { }
