import { email, required, schema } from "@angular/forms/signals"

export interface LoginRequest {
    email: string,
    password: string,
    remenber: boolean
}

export const initialDataLogin: LoginRequest = {
    email: '',
    password: '',
    remenber: false
}

export const loginValidations = schema<LoginRequest>((path) => {
    required(path.email);
    email(path.email, { message: 'E-mail inválido' });
    required(path.password);
})

export enum typeForm {
    login = 'login',
    forgot = 'forgot'
}