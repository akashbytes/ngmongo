import { NgModule, ViewChildren } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { CompanyComponent } from './company/company.component';


const routes: Routes = [
  {path:'',component:AdminComponent,
        children:[
                   {path:'',component:DashboardComponent},
                   {path:'company',component:CompanyComponent},
                   {path:'user',component:UserComponent},
        ]  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
