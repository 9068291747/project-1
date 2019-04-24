import { Component, OnInit } from '@angular/core';
import { CrudService } from './../crud.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor( private crud:CrudService) { }
  //varibles of the JSON Data
  registrationdata:any;
  username:any;
  password:any;
  confirmpassword:any;
  gender:any;
 
  //variable of service of service function
  respose:any;
  confrimation:any;

  registration(){
    this.registrationdata = {
      "username":this.username,
      "password":this.password,
      "confirmpassword":this.confirmpassword,
      "gender":this.gender
    }
    this.crud.insertData(this.registrationdata)
    .subscribe(registration => {
      this.respose = registration;

      this.confrimation = "Registration Completed Successfully";
      this.username = "";
      this.password = "";
      this.confirmpassword = "";
      this.gender = "";

    });

   


  }




  ngOnInit() {
   
  }

}
