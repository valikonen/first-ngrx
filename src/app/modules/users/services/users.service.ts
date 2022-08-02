import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'; 
import { Observable } from "rxjs";
import { UserI } from "../models/user.model";

@Injectable()
export class UsersService {

    constructor(private readonly http: HttpClient) {

    }
    getUsers(): Observable<UserI[]> {
        return this.http.get<UserI[]>('http://localhost:3000/users')
    }
}