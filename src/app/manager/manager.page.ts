import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
})
export class ManagerPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  tools(){
    this.router.navigate(['/tools'])
  } 
}
