import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novels',
  templateUrl: './novels.component.html',
  styleUrls: ['./novels.component.css']
})
export class NovelsComponent implements OnInit {

  constructor(private router: Router) { }
  username:any;

  ngOnInit() {
    this.username=localStorage.getItem("username");
    if(localStorage.getItem('success_login') == null){
      this.router.navigate(['login']);
    }
  }

}
