import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-auth-component',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  styleUrl: './auth-component.scss',
})
export class AuthComponent {

}
