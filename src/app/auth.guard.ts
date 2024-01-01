import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './MyServices/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: UserService, private router: Router) {}
  
  canActivate(): boolean {
    // Check if the user is logged in
    if (this.service.getUserLoggedStatus()) {
      return true;
    } else {
      // If the user is not logged in, redirect to the login page
      this.router.navigate(['/Login']);
      return false;
    }
  }

  
}
