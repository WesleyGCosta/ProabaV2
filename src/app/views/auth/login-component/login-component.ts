import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { initialDataLogin, LoginRequest, loginValidations, typeForm, typeForm as typeFormLogin } from '../../../models/login-request';
import { InputTextModule } from 'primeng/inputtext';
import { Field, form } from '@angular/forms/signals';
import { Button } from 'primeng/button';
import { Checkbox } from 'primeng/checkbox';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { InputGroup } from 'primeng/inputgroup';
import { NgOptimizedImage } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login-component',
  imports: [Button, Checkbox, InputGroupAddon, InputGroup, Field, NgOptimizedImage, InputTextModule],
  providers: [PasswordModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent implements OnInit {

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected loginRequestModel = signal<LoginRequest>(initialDataLogin);
  protected loginRequestForm = form(this.loginRequestModel, loginValidations);
  protected isInvalid = computed(() => this.loginRequestForm().invalid());
  protected mode = signal<typeFormLogin>(typeFormLogin.login);
  protected eTypeForm = typeForm;
  protected titleForm = computed(() =>
    this.mode() === typeForm.login
      ? 'Bem-vindo ao PROABA'
      : 'Digite seu e-mail para redefinir sua senha'
  );
  protected bannerClass = computed(() =>
    this.mode() === typeForm.login
      ? 'welcome'
      : 'forgot'
  );

  ngOnInit(): void {
    const modeParam = this.activatedRoute.snapshot.queryParamMap.get('mode');

    if (modeParam === 'forgot') {
      this.mode.set(typeForm.forgot);
    } else {
      this.mode.set(typeForm.login);
    }
  }

  submitted() {
    const formInstance = this.loginRequestForm();

    if (formInstance.invalid()) {
      formInstance.markAsTouched();
      return;
    }
    console.log(formInstance.value())
  }

  protected canSubmit = computed(() => {
    const form = this.loginRequestForm();

    if (this.mode() === this.eTypeForm.login) {
      return form.valid();
    }

    return this.loginRequestForm.email().valid();
  });


  toggleTypeForm() {
    const form = this.loginRequestForm();
    form.reset()
    this.loginRequestModel.set({ ...initialDataLogin });
    this.mode.update(current =>
      current === typeForm.login ? typeForm.forgot : typeForm.login
    );

    const isForgotMode = this.mode() === typeForm.forgot;
    this.router.navigate([], {
      queryParams: { mode: isForgotMode ? 'forgot' : null },
      queryParamsHandling: 'merge'
    })
  }

}
