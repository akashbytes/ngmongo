import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) ,canActivate:[AuthGuard]},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) ,canActivate:[AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
