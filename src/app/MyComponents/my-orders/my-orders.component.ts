import { Component } from '@angular/core';
import { CartService } from 'src/app/MyServices/cart.service';
import { UserService } from 'src/app/MyServices/user.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {

  orders: any=[];
  user: any;

  constructor(private service: CartService, private userService: UserService){}

  ngOnInit(){
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      console.log(this.user);
    }
    this.service.getOrderByUser(this.user.userName).subscribe((res:any)=>{this.orders = res});
    console.log(this.orders);
  }
}
