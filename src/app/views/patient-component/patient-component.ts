import { Component } from '@angular/core';
import { PageHeader } from "../../shared/page-header/page-header";
import { Button } from "primeng/button";
import { ContainerComponent } from "../../shared/container-component/container-component";

@Component({
  selector: 'app-patient-component',
  imports: [PageHeader, Button, ContainerComponent],
  templateUrl: './patient-component.html',
  styleUrl: './patient-component.scss',
})
export class PatientComponent {

}
