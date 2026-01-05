import { Component, input } from '@angular/core';
import { Button } from "primeng/button";

@Component({
  selector: 'app-page-header',
  imports: [Button],
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss',
})
export class PageHeader {
  public title = input<string>()
  public subtitle = input<string>()

}
