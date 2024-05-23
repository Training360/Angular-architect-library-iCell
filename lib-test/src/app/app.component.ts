import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountrySelectorComponent } from 'icell-form-controls';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CountrySelectorComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lib-test';
}
