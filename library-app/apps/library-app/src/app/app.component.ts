import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { IcellFormControlsComponent } from '@icell/form-controls';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    IcellFormControlsComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'library-app';
}
