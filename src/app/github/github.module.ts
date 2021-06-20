import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PrimengModule } from '../primeng/primeng.module';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class GithubModule { }
