import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUser(): string {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('username') !== null;
  }

  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'password') {
      localStorage.setItem('username', username);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('username');
  }
}
