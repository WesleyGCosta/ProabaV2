import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [],
  template: ` 
    <ng-content/>
    `,
  styleUrl: './container-component.scss',
})
export class ContainerComponent {

}
