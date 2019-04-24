import { Component, OnInit } from '@angular/core';
import { CrudService } from './../crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private crud:CrudService, private router: Router) { }

  //Variable Declaring of JSON Data
  logindata:any;
  username:any;
  password:any;


  //Variable Declation of the if else condition
  errorLogin:any;
  confirmation:any;


  //Variable declaration of the subscribe funtion
  response:any;

  login(){

    if (this.username == null || this.password == null){
      this.errorLogin = true;
      this.confirmation = "Please Enter Username and Password"
    } else

    {
    this.logindata ={
      "username":this.username,
      "password":this.password
    }
    

    this.crud.checklogin(this.logindata)
        .subscribe(login_data => {
          this.response = login_data;
          if (this.response['status'] == false) {
            this.errorLogin = true;
            this.confirmation = this.response['data'];
          } else {
            this.errorLogin = false;
            localStorage.setItem('success_login', "true");
            localStorage.setItem('username', this.username);
            this.router.navigate(['home']);
          }
        });
  
  }
}

  ngOnInit() {
  }

}
