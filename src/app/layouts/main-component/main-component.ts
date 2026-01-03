import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../../shared/header-component/header-component";

@Component({
  selector: 'app-main-component',
  imports: [RouterOutlet, HeaderComponent],
  template: `
  <app-header-component/>
  <main>
    <router-outlet></router-outlet>
  </main>
  `,
  styleUrl: './main-component.scss',
})
export class MainComponent { }
