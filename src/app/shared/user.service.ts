import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class UserService {
    private currentUser: User;

    constructor(private httpClient: HttpClient) {}
    getUsers(): Observable<User[]> {
        const url = 'https://pricey-giver.glitch.me/users';

        return this.httpClient.get<User[]>(url); 
    }

    getCurrentUser(): User {
        return this.currentUser;
    }

    setCurrentUser(newUser: User) {
        this.currentUser = newUser;
    }
}
