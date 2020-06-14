import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyComponent } from './company/company.component';
import { UserComponent } from './user/user.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [AdminComponent, DashboardComponent, CompanyComponent, UserComponent, NavComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
