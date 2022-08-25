import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AddressbookServiceService } from 'src/app/addressbook-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

constructor(private router: Router, private service: AddressbookServiceService) { }

  addressbook: any;

  ngOnInit(): void {
    this.service.getAddressBook().subscribe(data => {
      console.log(data);
      this.addressbook = data;
    })
    console.log(this.addressbook)
  }

  onAddUser() {
    
    this.router.navigate(["form"]);
  }

  deleteAddressRecord(Id: number) {
      this.service.deleteAddressBookById(Id).subscribe(data => { 
        
        console.log("Data Deleted Sucessfully") });
      window.location.reload()
    }
  
  editAddressRecord(Id: number) {
    this.router.navigate(["update", Id]);
  }
  
}