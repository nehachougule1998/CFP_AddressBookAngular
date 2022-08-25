import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressbookServiceService } from 'src/app/addressbook-service.service';
import { AddressBook } from 'src/app/Model/AddressBook';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


   Id: any = this.route.snapshot.paramMap.get('Id')

  constructor(private router: Router, private _service: AddressbookServiceService,  private route: ActivatedRoute) { }

  addressbook: AddressBook = new AddressBook('', '', '', '', '', '', 0, 0);

  ngOnInit(): void {
    console.log("the id is",this.Id);
    this._service.getAddressBookById(this.Id).subscribe((data : any)=>{
      this.addressbook=data.data;
      console.log("the response dto is",data)
      console.log("the message is",data.message)
      console.log("the address book data is",this.addressbook);
    })

  }

  onDashboard() {
    this.router.navigate(["dashboard"]);
  }

  onAddContact() {
    console.log(this.addressbook);
    this._service.insertAddressBook(this.addressbook).subscribe((data :any)=> {
      console.log("Data Added Successfully");
       this.router.navigate(["dashboard"]);

    });
    
  }

  onUpdateContact() {
      this._service.updateAddressBookById(this.Id, this.addressbook).subscribe(data => {
         console.log("Data Updated Successfully !");
      this.router.navigate(["dashboard"]);
    });
   
}

}