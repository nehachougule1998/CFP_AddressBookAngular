import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AddressbookServiceService {

  constructor(private http:HttpClient) { }

  insertAddressBook(addressbook:any){
    return this.http.post("http://localhost:8080/addressbook/register",addressbook);
  }

  getAddressBook(){
    return this.http.get("http://localhost:8080/addressbook/get");
  }

  getAddressBookById(Id:number){
    return this.http.get("http://localhost:8080/addressbook/get/"+Id);
  }

  updateAddressBookById(Id:number,addressbook:any){
    return this.http.put("http://localhost:8080/addressbook/update/"+Id,addressbook);
  }
  
  deleteAddressBookById(Id:number){
    return this.http.delete("http://localhost:8080/addressbook/delete/"+Id);
  }
}
