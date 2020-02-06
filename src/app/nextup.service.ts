import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NextupService {

  constructor() { }
  getUpnext(){
    return[
     
      {"video" : "assets/video.png",
      "name" : "Angular 8 - Property binding",
      "views" : "20 views"
     },
     {"video" : "assets/video.png",
     "name" : "Angular 8 - Property binding",
     "views" : "20 views"
     },
      {"video" : "assets/video.png",
      "name" : "Angular 8 - Property binding",
      "views" : "20 views"
      },
    ]
  }
    

}
