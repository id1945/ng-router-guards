import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public authenticated(): boolean {
    return true;
    // return false;
  }

  public authenticatedChild(): boolean {
    return true;
    // return false;
  }
}
