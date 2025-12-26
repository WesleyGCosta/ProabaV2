import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-auth-component',
  imports: [RouterOutlet],
  template: `
      <main>
          <router-outlet></router-outlet>
      </main>
  `,
  styleUrl: './auth-component.scss',
})
export class AuthComponent {

}
