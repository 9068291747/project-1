import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  username:any;
  ngOnInit() {
    this.username=localStorage.getItem("username");
    if(localStorage.getItem('success_login') == null){
      this.router.navigate(['login']);
    }
  }

}
