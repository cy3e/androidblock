import { Component, OnInit } from '@angular/core';

var token = document.getElementById("token") as HTMLInputElement | null;
var codigo = token?.value;

@Component({
  selector: 'app-token',
  templateUrl: './token.page.html',
  styleUrls: ['./token.page.scss'],
})

export class TokenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   
  onKeydown(event) {
    if (event.key === "Enter") {
      console.log(codigo);
      //make the get-data from phone

      //make insert data from the get to managment
    }
  }

}
