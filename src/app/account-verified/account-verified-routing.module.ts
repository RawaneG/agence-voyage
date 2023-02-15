import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountVerifiedComponent } from './account-verified.component';

const routes: Routes = [{ path: '', component: AccountVerifiedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountVerifiedRoutingModule { }
