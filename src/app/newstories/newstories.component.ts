import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router';

@Component({
  selector: 'app-newstories',
  templateUrl: './newstories.component.html',
  styleUrls: ['./newstories.component.css']
})
export class NewstoriesComponent implements OnInit {

  constructor(private router: Router) { }
  username:any;

  ngOnInit() {
    this.username=localStorage.getItem("username");
    if(localStorage.getItem('success_login') == null){
      this.router.navigate(['login']);
    }
  }

}
