import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { EncrypDcrypService } from 'src/app/MyServices/encryp-dcryp.service';
import { UserService } from 'src/app/MyServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: any;
  registerUser: any;
  route: string ='';

  loggedIn: boolean = this.service.getGoogleLoginStatus();
  private accessToken = '';

  constructor(
    private router: Router,
    private service: UserService,
    private authService: SocialAuthService,
    private toast: HotToastService,
    private encrdcr: EncrypDcrypService
  ) {
    this.registerUser = {
      userId: '',
      userName: '',
      address: '',
      contactNo: '',
      country: '',
      emailId: '',
      password: ''
    }
    this.route = this.service.getRoute();
      console.log(this.route);  
   
  }

  getAccessToken(): void {
    this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID)
      .then(accessToken => this.accessToken = accessToken);
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  ngOnInit() {
    this.service.setRoute('');
      

    if (this.service.getGoogleLoginStatus() == false) {
      
      this.authService.authState.subscribe((socialUser) => {
        this.user = socialUser;
        const emailId = socialUser.email;
        console.log(emailId);

        this.service.checkEmailExists(emailId).then((exists: boolean) => {
          if (exists) {
            // User exists
            this.service.googleLogin(emailId).subscribe((user: any) => {
              this.user = user;
              console.log(user);
              localStorage.setItem('user', JSON.stringify(this.user));
              // this.service.setUser(this.user);

              // alert('Hello ' + this.user.userName);
              const ref = this.toast.show(`
                Hello <span class="bg-toast-100">${this.user.userName}</span>.`,
                  { autoClose: false, icon: '✅', position: 'top-center' }
                );
                setTimeout(() => {
                  ref.close();
                }, 2000);
              this.service.setUserLoggedIn();
              this.service.setGoogleLogin();

              console.log('Routing to '+this.route);
             
              if(this.route == ""){
                this.router.navigate(['Home']);
              }else{
                this.router.navigateByUrl(this.route);
              }
              

            },
              (error: any) => {
                console.log("Google user retreival failed");
              }
            );
          } else {
            this.toast.info('Please wait!!');
            this.registerUser.emailId = socialUser.email;
            this.registerUser.userName = socialUser.name;
            console.log(this.registerUser);
            // User does not exist, register the user
            this.service.registerUser(this.registerUser).subscribe((res: any) => {
              // Registration successful, do something with the response
              this.user = res;
              console.log(this.user);
              localStorage.setItem('user', JSON.stringify(this.user));
              

              // alert('Hello ' + this.user.name);
              const ref = this.toast.show(`
                Hello <span class="bg-toast-100">${this.user.userName}</span>.`,
                  { autoClose: false, icon: '✅', position: 'top-center' }
                );
                setTimeout(() => {
                  ref.close();
                }, 2000);
              this.service.setUserLoggedIn();
              this.service.setGoogleLogin();
              if(this.route == ""){
                this.router.navigate(['Home']);
              }else{
                this.router.navigateByUrl(this.route);
              }
            }, (error: any) => {
              // Registration failed, handle the error
              console.log("Google user registration failed");
            }
            );
          }
        });

        this.loggedIn = (socialUser != null);

      });
    }
  }

  async login(loginForm: any) {
      console.log(loginForm);
      console.log(loginForm.password);

      if (loginForm.loginId === 'ADMIN' && loginForm.password === 'ADMIN') {
        // alert('Welcome ADMIN!!');
        const ref = this.toast.show(`
                Hello <span class="bg-toast-100">Welcome Admin</span>.`,
                  { autoClose: false, icon: '👨‍💻', position: 'top-center' }
                );
                setTimeout(() => {
                  ref.close();
                }, 2000);
        localStorage.setItem("Admin", JSON.stringify(true));
        this.service.setUserLoggedIn();
        this.router.navigate(['AdminPage']);
      }
      else {

        const encryptdPassword = this.encrdcr.encryptPassword(loginForm.password);
        loginForm.password = encryptdPassword;
        console.log(loginForm);
        await this.service.getUserDetails(loginForm).then((empData: any) => {
          this.user = empData;
          console.log(empData);
        });

        if (this.user != null) {
          this.service.setUserLoggedIn();
          console.log(this.user);
          console.log(this.user.userName);
          localStorage.setItem('user', JSON.stringify(this.user));
          // alert('Hello ' + this.user.userName);
          const ref = this.toast.show(`
          Hello <span class="bg-toast-100">${this.user.userName}</span>.`,
            { autoClose: false, icon: '✅', position: 'top-center' }
          );
          setTimeout(() => {
            ref.close();
          }, 2000);
         
          if(this.route == ""){
            this.router.navigate(['Home']);
          }else{
            this.router.navigateByUrl(this.route);
          }
        } else {
          // alert('Invalid Credentials');
          const ref = this.toast.error(`Invalid Credentials.`,
                  { autoClose: false, position: 'top-center' }
                );
                setTimeout(() => {
                  ref.close();
                }, 2000);
          this.router.navigate(['Login']);
        }
      }
    }

  }
