import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any;
  isUserLoggedIn: boolean;
  loginStatus: Subject<any>;
  private intendedRoute: string = '';

  googleLoginStatus: boolean;

  //Implementing Dependency Injection for HttpClient using Constructor
  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
    this.loginStatus = new Subject();
    this.googleLoginStatus = false;
  }

  getRoute(): string {
    return this.intendedRoute;
  }

  setRoute(route: string) {
    this.intendedRoute = route;
  }

  //LoginSuccess
  setUserLoggedIn() {
    this.isUserLoggedIn = true;
    this.loginStatus.next(true);
  }

  getLoginStatus(): any {
    return this.loginStatus.asObservable();
  }

  getUserLoggedStatus(): boolean {
    return this.isUserLoggedIn;
  }

  setUserLogout() {
    this.isUserLoggedIn = false;
    this.loginStatus.next(false);
  }

  //Google login
  getGoogleLoginStatus(): boolean {
    return this.googleLoginStatus;
  }

  setGoogleLogin() {
    this.googleLoginStatus = true;
  }

  setGoogleLogout() {
    this.googleLoginStatus = false;
  }

  registerUser(user: any) {
    return this.http.post('/registerUser', user);
  }

  updateUser(user: any) {
    return this.http.post('/updateUser', user);
  }


  getAllUsers(): any {
    return this.http.get('getAllUsers');
  }

  getUserDetails(loginForm: any): any {
    return this.http.get('/userLogin/' + loginForm.loginId + "/" + loginForm.password).toPromise();
  }

  googleLogin(email: any): any {
    return this.http.get('/getUserByEmail/' + email);
  }

  checkEmailExists(email: any): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.http.get('/checkEmail/' + email, { responseType: 'text' })
        .subscribe(
          (response) => {
            if (response === 'true') {
              resolve(true); // Email exists

            } else {
              resolve(false); // Email does not exist or API response is null
            }
          },
          (error) => {
            reject(error); // API request failed
          }
        );
    });
  }


}
