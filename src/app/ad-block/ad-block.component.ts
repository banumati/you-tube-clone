import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-block',
  templateUrl: './ad-block.component.html',
  styleUrls: ['./ad-block.component.css']
})

export class AdBlockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  printImGreat() {
    alert("hi I am banu, and I am the best in the world ");
  }
}
