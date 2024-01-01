import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { CartService } from 'src/app/MyServices/cart.service';
import { ProductService } from 'src/app/MyServices/product.service';
import { UserService } from 'src/app/MyServices/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  products: any = [];
  grandTotal: number = 0;
  taxPercentage = 0.05;
  tax : number =0;
  shipping : number = 100;
  AmountToBePaid : any;
  order : any;


  constructor(
    private service: CartService, 
    private prodService: ProductService, 
    private route: Router, 
    private userService: UserService, 
    private toast: HotToastService
    ) { 
    
  }

  ngOnInit(){
   
    this.service.getProductData().subscribe((res: any, i: number)=>{
    this.products = res;
    
    this.grandTotal = this.service.getToatalAmount();
    })
    this.calculateTax();
    this.calculateFinalAmount();
  }

  removeProduct(item: any){
    this.service.removeItem(item);
    this.calculateTax();
    this.calculateFinalAmount();
    this.toast.info('item removed from cart!!');
  }

  removeAllProducts(){
    this.service.emptyCart();
    this.toast.info('Cart is emptied!!');
  }

  updateTotal(cartItem: any) {
    cartItem.total = cartItem.price * cartItem.quantity;
    this.grandTotal = this.service.getToatalAmount();
    this.calculateTax();
    this.calculateFinalAmount();
  }

  calculateTax() {
    this.tax = this.grandTotal * this.taxPercentage;
  }

  calculateFinalAmount(){
    const amount = this.grandTotal + this.tax + this.shipping;
    this.AmountToBePaid = parseFloat(amount.toFixed(2));
  }
  
  makeMyOder(){
    this.order = {
      products : this.products,
      subTotal : this.grandTotal,
      tax : this.tax,
      shipping : this.shipping,
      grandTotal : this.AmountToBePaid,
    }
    console.log(this.order);
    // this.service.setOrder(this.order);
    localStorage.setItem('order', JSON.stringify(this.order));
    this.userService.setRoute('/OrderSummary');
    this.route.navigate(["OrderSummary"]);
    this.service.emptyCart();
  }

}
