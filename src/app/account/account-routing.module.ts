import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { AjoutDemandeComponent } from '../account/ajout-demande/ajout-demande.component';

const routes: Routes =
[
  { path: '', component: AccountComponent },
  { path: 'ajout-demande', component: AjoutDemandeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
