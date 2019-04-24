import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.css']
})
export class NetworksComponent implements OnInit {

  constructor(private router: Router) { }
  username:any;

  ngOnInit() {
    this.username=localStorage.getItem("username");
    if(localStorage.getItem('success_login') == null){
      this.router.navigate(['login']);
    }
  }

}
