import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoContainerComponent } from './video-container/video-container.component';
import { CommentSecComponent } from './comment-sec/comment-sec.component';
import { AdBlockComponent } from './ad-block/ad-block.component';
import { RelventVideoBlockComponent } from './relvent-video-block/relvent-video-block.component';
import { NextupService } from './nextup.service';
import { CommentsService } from './comments.service';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavbarComponent,
    VideoContainerComponent,
    CommentSecComponent,
    AdBlockComponent,
    RelventVideoBlockComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [NextupService,CommentsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
