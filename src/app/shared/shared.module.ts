import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    SideBarComponent
  ]
})
export class SharedModule { }
