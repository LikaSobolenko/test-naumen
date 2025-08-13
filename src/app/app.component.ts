import { Component } from '@angular/core';
import { UserslistComponent } from "./userslist/userslist.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserslistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-naumen';
}
