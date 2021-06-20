import { NgModule } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  exports: [
    AvatarModule,
    DropdownModule,
    TableModule,
    InputTextModule
  ]
})
export class PrimengModule { }
