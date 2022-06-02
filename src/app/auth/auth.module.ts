import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AuthPageRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthPage } from './pages/index/auth.page';




@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    AuthPageRoutingModule
  ],
  declarations: [AuthPage]
})
export class AuthPageModule {}
