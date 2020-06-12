import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {CreateContactComponent} from '../create-contact/create-contact.component'
import {ViewContactComponent} from '../view-contact/view-contact.component'
import {EditContactComponent} from '../edit-contact/edit-contact.component'

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path:'create',
    component: CreateContactComponent
  },
  {
    path:'view',
    component:ViewContactComponent
  },
  {
    path: 'edit',
    component:EditContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
