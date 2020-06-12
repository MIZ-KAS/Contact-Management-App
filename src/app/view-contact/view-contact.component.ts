import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss'],
})
export class ViewContactComponent implements OnInit {
  firstName :any;
  lastName:any;

  constructor() { }

  ngOnInit() {
    this.firstName = localStorage.getItem('first_name');
    this.lastName = localStorage.getItem('last_name');
    console.log(this.firstName,this.lastName,'nnnn')

  }

  deleteFirstName(){
    localStorage.removeItem('first_name');
    alert('First name has been removed');
    window.location.reload();
  }

  deleteLastName(){
    localStorage.removeItem('last_name');
    alert('Last name has been removed');  
    window.location.reload();
  }


}
