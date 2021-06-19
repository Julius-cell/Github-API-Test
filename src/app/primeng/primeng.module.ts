import { NgModule } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';


@NgModule({
  exports: [
    AvatarModule,
    DropdownModule,
    TableModule
  ]
})
export class PrimengModule { }
