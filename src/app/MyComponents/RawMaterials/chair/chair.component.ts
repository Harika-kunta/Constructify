import { Component } from '@angular/core';
import { CartService } from 'src/app/MyServices/cart.service';
import { ProductService } from 'src/app/MyServices/product.service';
import { UserService } from 'src/app/MyServices/user.service';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.css']
})
export class ChairComponent {
  products: any;

  constructor(private service: CartService, private prodService: ProductService) { 

    // this.products = [
    //   {id:1301, price:800.80, imgsrc:"assets/images/chair1.jpg"},
    //   {id:1302,  price:900.99, imgsrc:"assets/images/chair2.jpg"},
    //   {id:1303, price:750.59, imgsrc:"assets/images/chair3.jpg"},
    //   {id:1304, price:780.59, imgsrc:"assets/images/chair4.jpg"}
      
    // ];
  }

  ngOnInit(){
    this.prodService.getProductByCategory("Chair").subscribe((data : any)=>{
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
