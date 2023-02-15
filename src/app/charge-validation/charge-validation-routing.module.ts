import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargeValidationComponent } from './charge-validation.component';

const routes: Routes = [{ path: '', component: ChargeValidationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChargeValidationRoutingModule { }
