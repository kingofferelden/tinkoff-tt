import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { StoreService } from "../../core/store.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(public store: StoreService, public router: Router) {
    }

    public async canActivate(): Promise<boolean> {
        if (!this.store.jwt$.getValue()) {
            await this.router.navigate(['auth']);
            return false;
        }

        return true;
    }
}
