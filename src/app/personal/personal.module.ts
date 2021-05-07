import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalLayoutComponent } from './shared/components/personal-layout/personal-layout.component';
import { PersonalListComponent } from './pages/personal-list/personal-list.component';
import { PersonalItemComponent } from './pages/personal-item/personal-item.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonalLayoutComponent,
    PersonalListComponent,
    PersonalItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PersonalRoutingModule
  ]
})
export class PersonalModule { }
