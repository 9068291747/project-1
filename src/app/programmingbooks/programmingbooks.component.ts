import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programmingbooks',
  templateUrl: './programmingbooks.component.html',
  styleUrls: ['./programmingbooks.component.css']
})
export class ProgrammingbooksComponent implements OnInit {

  constructor(private router: Router) { }
       username:any;
  ngOnInit() {
    this.username=localStorage.getItem("username");
    if(localStorage.getItem('success_login') == null){
      this.router.navigate(['login']);
    }
  }

}
