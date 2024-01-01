import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/MyServices/cart.service';
import { UserService } from 'src/app/MyServices/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  loginStatus: any;
  cartItemsLength : number = 0;
  

  constructor(
    private service: UserService,
    private router: Router,
    private cartService: CartService) {
   
   }

  ngOnInit() {

    this.service.getLoginStatus().subscribe((loginStatusData: any) => {
      this.loginStatus = loginStatusData;
    });

    this.cartService.getProductData().subscribe((productData: any) => {
      this.cartItemsLength = productData.length;
    });
  }


}
