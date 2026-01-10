import { Component } from '@angular/core';
import { ContainerComponent } from "../../shared/container-component/container-component";
import { PageHeader } from "../../shared/page-header/page-header";

@Component({
  selector: 'app-home-component',
  imports: [ContainerComponent, PageHeader],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {

}
