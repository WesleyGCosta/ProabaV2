import { Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth-component/auth-component';
import { LoginComponent } from './views/auth/login-component/login-component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    {  
        path: '',
        component: AuthComponent,
        children: [
            { path: 'login', component: LoginComponent }
        ]
    },
];
