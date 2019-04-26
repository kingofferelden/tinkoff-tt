import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { User } from "../../../../common/models/user.model";
import { environment } from "../../environments/environment";
import { JwtModel } from "../../../../common/models/jwt.model";

@Injectable({ providedIn: 'root' })
export class ApiUserService {
    constructor(private http: HttpClient) {
    }

    public registration(user: User): Observable<void> {
        return this.http.post<any>(`${environment.host}/users/`, user);
    }

    public auth(user: User): Observable<JwtModel> {
        return this.http.post<any>(`${environment.host}/auth/`, user);
    }
}
