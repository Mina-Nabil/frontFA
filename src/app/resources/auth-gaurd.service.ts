import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public authService: AuthServiceService, public router: Router) {}
  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['home/login']);
      return false;
    }
    return true;
  }
}
