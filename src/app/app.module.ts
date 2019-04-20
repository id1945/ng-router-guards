import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
import { AuthService } from 'src/app/shared/auth.service';
import { AuthGuardService } from 'src/app/shared/auth-guard.service';
import { AdminComponent } from './admin/admin.component';
import { RoleComponent } from './admin/role/role.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SupportComponent,
    AdminComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
