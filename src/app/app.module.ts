import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';

@NgModule({
  declarations: [
    BoardComponent,  // Declare BoardComponent here
    SquareComponent  // Declare SquareComponent here as well
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule { }
