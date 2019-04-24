import { Component, OnInit } from '@angular/core';
import{ Router } from'@angular/router';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit {

  constructor(private router: Router) { }
  username:any;

  ngOnInit() {
    this.username=localStorage.getItem("username");
    if(localStorage.getItem('success_login') == null){
      this.router.navigate(['login']);
    }
  }

}
