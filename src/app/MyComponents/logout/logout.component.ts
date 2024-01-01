import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { CartService } from 'src/app/MyServices/cart.service';
import { UserService } from 'src/app/MyServices/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private service: UserService,
    private router: Router,
    private authService: SocialAuthService,
    private cartService: CartService,
    private toast : HotToastService
    ) {
      this.service.setUserLogout();
      localStorage.removeItem('user');
      localStorage.removeItem('order');
      localStorage.removeItem('Admin');
      // alert("logout successfull!");
      const ref = this.toast.show(`Logout successfull!!`,
                  { autoClose: false, icon: '✅', position: 'top-center' }
                );
                setTimeout(() => {
                  ref.close();
                }, 2000);
      this.service.setRoute('');
      this.router.navigate(['Home']);
    
  }

  ngOnInit(){
    this.service.setGoogleLogout();
    this.authService.signOut();
    
    this.cartService.getProductData().next(null);
  }

}
