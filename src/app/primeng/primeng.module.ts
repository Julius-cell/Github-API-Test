import { NgModule } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  exports: [
    AvatarModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    TableModule,
  ]
})
export class PrimengModule { }
