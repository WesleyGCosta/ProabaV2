import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../../shared/header-component/header-component";
import { SiderbarComponent } from "../../shared/siderbar-component/siderbar-component";

@Component({
  selector: 'app-main-component',
  imports: [RouterOutlet, HeaderComponent, SiderbarComponent],
  template: `
  <app-header-component/>
  <main>
    <app-siderbar-component></app-siderbar-component>
    <router-outlet></router-outlet>
  </main>
  `,
  styleUrl: './main-component.scss',
})
export class MainComponent { }
