import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Checkbox } from 'primeng/checkbox';

@Component({
  selector: 'app-login-component',
   imports: [FormsModule, InputTextModule, ButtonModule, Checkbox],
  providers: [PasswordModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {

  protected email: string | undefined;
  protected password: string | undefined;
  protected remenber = false;
}
