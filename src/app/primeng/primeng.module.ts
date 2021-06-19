import { NgModule } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  exports: [
    AvatarModule,
    DropdownModule
  ]
})
export class PrimengModule { }
