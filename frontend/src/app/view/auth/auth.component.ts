import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { User } from "../../../../../common/models/user.model";
import { ApiUserService } from "../../core/api-user.service";
import { JwtModel } from "../../../../../common/models/jwt.model";
import { StoreService } from "../../core/store.service";
import { Router } from "@angular/router";

@Component({
    selector: 'auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {
    public hide: boolean = true;
    public error: boolean;
    public email: FormControl = new FormControl('', [Validators.required, Validators.email]);
    public password: FormControl = new FormControl('', [Validators.required]);

    constructor(private user: ApiUserService, private store: StoreService, private router: Router) {
    }

    getEmailErrorMessage() {
        return this.email.hasError('required') ? 'Необходимо заполнить поле' :
            this.email.hasError('email') ? 'Неправильный email' : '';
    }

    getPasswordErrorMessage() {
        return this.password.hasError('required') ? 'Необходимо заполнить поле' :
            this.password.hasError('pattern') ? 'Неправильный password' : '';
    }

    registration() {
        if (this.isValid()) {
            const user: User = this.getState();
            this.user.registration(user).subscribe(() => this.auth(), () => this.error = true);
        }
    }

    login() {
        if (this.isValid()) {
            this.auth();
        }
    }

    private auth() {
        const user: User = this.getState();
        this.user.auth(user).subscribe(async (data: JwtModel) => {
            this.store.jwt$.next(data.token);
            localStorage.setItem('jwt', data.token);
            await this.router.navigate(['dashboard']);
        }, () => this.error = true);
    }

    private isValid(): boolean {
        return this.email.value && this.password.value;
    }

    private getState(): User {
        return {
            email: this.email.value,
            password: this.password.value
        }
    }
}
