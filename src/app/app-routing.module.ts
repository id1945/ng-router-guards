import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { SupportComponent } from 'src/app/support/support.component';
import { AuthGuardService } from 'src/app/shared/auth-guard.service';
import { AdminComponent } from 'src/app/admin/admin.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'support',
    component: SupportComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
          path: '',
          canActivateChild: [AuthGuardService],
          children: [
              { path: 'user', component: AdminComponent },
              { path: 'role', component: AdminComponent }
          ]
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
