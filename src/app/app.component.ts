import { Component } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,  // Mark the component as standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, BoardComponent]  // Import the BoardComponent and CommonModule
})
export class AppComponent {
  title = 'tic-tac-toe';
}
