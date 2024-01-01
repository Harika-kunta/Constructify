import { Component } from '@angular/core';
import { CartService } from 'src/app/MyServices/cart.service';
import { ProductService } from 'src/app/MyServices/product.service';
import { UserService } from 'src/app/MyServices/user.service';

@Component({
  selector: 'app-shandler',
  templateUrl: './shandler.component.html',
  styleUrls: ['./shandler.component.css']
})
export class ShandlerComponent {
  products: any;

  constructor(private service: CartService, private prodService: ProductService) { 

    // this.products = [
    //   {id:1401, price:1500.80, imgsrc:"assets/images/shandler1.jpg"},
    //   {id:1402,  price:1200.99, imgsrc:"assets/images/shandler2.jpg"},
    //   {id:1403,   price:1400.59, imgsrc:"assets/images/shandler3.jpg"},
    //   {id:1404,   price:1350.59, imgsrc:"assets/images/shandler4.jpg"}
    // ];
  }

  ngOnInit(){
    this.prodService.getProductByCategory("Chandelier").subscribe((data : any)=>{
      this.products = data;
      this.products.forEach((a:any) => {
        Object.assign(a, {quantity: 1, total: a.price})
      });
    });
  }

  addToCart(product: any) {
    this.service.addToCart(product);
  }


}
