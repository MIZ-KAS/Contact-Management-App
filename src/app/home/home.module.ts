import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import {CreateContactComponent} from '../create-contact/create-contact.component'
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ViewContactComponent} from '../view-contact/view-contact.component'
import { EditContactComponent } from '../edit-contact/edit-contact.component'
import { HomePageRoutingModule } from './home-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
    CreateContactComponent,
    ViewContactComponent,
    EditContactComponent
  ]
})
export class HomePageModule {}
