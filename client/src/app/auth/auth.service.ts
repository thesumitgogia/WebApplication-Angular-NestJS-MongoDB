import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private userLoginSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.hasToken());

    constructor() { }

    // Check if the user has a valid token
    public hasToken(): boolean {
        return localStorage.getItem('authToken') !== null && localStorage.getItem('authToken') !== '';
    }

    // Set the login status
    setLoginStatus(status: boolean): void {
        this.userLoginSubject.next(status);
    }

    // Get the login status as an observable
    getLoginStatus(): Observable<boolean> {
        return this.userLoginSubject.asObservable();
    }
}
