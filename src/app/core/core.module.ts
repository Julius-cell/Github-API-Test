import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from '../primeng/primeng.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class CoreModule { }
