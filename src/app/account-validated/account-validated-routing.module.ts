import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountValidatedComponent } from './account-validated.component';

const routes: Routes = [{ path: '', component: AccountValidatedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountValidatedRoutingModule { }
