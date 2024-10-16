import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,  // Mark as standalone
  template: `
    <button>{{ value }}</button>
  `,
  styles: [`
    button {
      width: 100px;
      height: 100px;
      font-size: 24px;
    }
  `]
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;  // Set the Input property
}
