import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { LevelComponent } from './level/level.component';
import { LevelContainerComponent } from './level-container/level-container.component';
import { MessagesComponent } from './messages/messages.component';
import { ThemeXComponent } from './theme-x/theme-x.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    LevelComponent,
    LevelContainerComponent,
    MessagesComponent,
    ThemeXComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
