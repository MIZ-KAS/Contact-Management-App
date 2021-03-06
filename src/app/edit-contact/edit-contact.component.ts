import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router'


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  errorMessage: string = '';
  successMessage: string ='';
 
  
contact_form:FormGroup = new FormGroup ({
  firstName:new FormControl(localStorage.getItem('first_name'),Validators.required),
  lastName:new FormControl(localStorage.getItem('last_name'),Validators.required)
}) 

//declare a variable to show validation_messages
validation_messages={
  'firstName':[
    {type:'required',message:'first Name is required'}
  ],
  'lastName':[
    {type:'required',message:'last Name is required'}
  ]
}
  

  constructor(private route:Router) { }

  ngOnInit() {
   
  }

  // name = this.contact_form.value;

  getContact(){
    localStorage.clear();
    let Firstname = this.contact_form.value.firstName;
    let Lastname = this.contact_form.value.lastName
    console.log(this.contact_form.value,'contact');
    localStorage.setItem('first_name',Firstname);
    localStorage.setItem('last_name',Lastname);
    

    this.route.navigate(['/home/view']);
  }

}


