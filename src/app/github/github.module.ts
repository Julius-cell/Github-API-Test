import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from '../primeng/primeng.module';

import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    HomeComponent
  ]
})
export class GithubModule { }
