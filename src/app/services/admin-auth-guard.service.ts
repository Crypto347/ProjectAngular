import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(
    private auth: AuthService
  ) { }

  canActivate(): Observable<boolean>{
    return this.auth.appUser$
    .map(appUser => appUser.isAdmin);
  }
}
