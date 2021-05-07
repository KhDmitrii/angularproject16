import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalItemComponent } from './pages/personal-item/personal-item.component';
import { PersonalListComponent } from './pages/personal-list/personal-list.component';
import { PersonalLayoutComponent } from './shared/components/personal-layout/personal-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalLayoutComponent,
    children: [
      { path: '', component: PersonalListComponent },
      { path: 'item/:id', component: PersonalItemComponent },
      { path: 'item', component: PersonalItemComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalRoutingModule {}
