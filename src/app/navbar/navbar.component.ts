import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public searchText="";
  public errorText={
    color:"red",
    fontStyle:"italic",
    fontWeight:"bold"

  }
  public successText={
    color:"green",
    fontStyle:"normal",
    fontWeight:"normal"

  }


  constructor() { }

  ngOnInit() {
  }

  public setMystyle()
  {
    // "searchText === 'banu' ? errorText : successText "
     return this.searchText == 'Senthil' ? this.errorText : this.successText;
    
  }
  getSearchText(data) {
    console.log('I m inside', data)
  }

}
