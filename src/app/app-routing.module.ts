import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
[
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'account-verified', loadChildren: () => import('./account-verified/account-verified.module').then(m => m.AccountVerifiedModule) },
  { path: 'charge-validation', loadChildren: () => import('./charge-validation/charge-validation.module').then(m => m.ChargeValidationModule) },
{ path: 'account-validated', loadChildren: () => import('./account-validated/account-validated.module').then(m => m.AccountValidatedModule) },
  { path: '**', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
