import { Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth-component/auth-component';
import { LoginComponent } from './views/auth/login-component/login-component';
import { MainComponent } from './layouts/main-component/main-component';
import { HomeComponent } from './views/home-component/home-component';
import { PatientComponent } from './views/patient-component/patient-component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '',
        component: AuthComponent,
        children: [
            { path: 'login', component: LoginComponent }
        ],
    },
    {
        path: '',
        component: MainComponent,
        children: [
            { path: 'inicio', component: HomeComponent },
            { path: 'pacientes', component: PatientComponent }
        ]
    }
];
