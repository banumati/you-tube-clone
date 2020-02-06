import { Component, OnInit } from '@angular/core';
import { NextupService } from '../nextup.service';

@Component({
  selector: 'app-relvent-video-block',
  templateUrl: './relvent-video-block.component.html',
  styleUrls: ['./relvent-video-block.component.css']
})
export class RelventVideoBlockComponent implements OnInit {

  public upnexts = [];

  constructor(private _upnext: NextupService) { }

  ngOnInit() {
    this.upnexts = this._upnext.getUpnext();
    console.log(this._upnext.getUpnext())

  }

}
