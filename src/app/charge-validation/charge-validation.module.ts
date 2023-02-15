import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChargeValidationRoutingModule } from './charge-validation-routing.module';
import { ChargeValidationComponent } from './charge-validation.component';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ChargeValidationComponent
  ],
  imports: [
    MatIconModule,
    CommonModule,
    ChargeValidationRoutingModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class ChargeValidationModule { }
