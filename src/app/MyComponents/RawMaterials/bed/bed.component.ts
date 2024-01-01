import { Component } from '@angular/core';
import { CartService } from 'src/app/MyServices/cart.service';
import { ProductService } from 'src/app/MyServices/product.service';
import { UserService } from 'src/app/MyServices/user.service';

@Component({
  selector: 'app-bed',
  templateUrl: './bed.component.html',
  styleUrls: ['./bed.component.css']
})
export class BedComponent {
  products: any;

  constructor(private service: CartService, private prodService: ProductService) { 

    // this.products = [
    //   {id:1201, price:25000.80, imgsrc:"assets/images/bed1.jpg"},
    //   {id:1202, price:22000.99, imgsrc:"assets/images/bed2.jpg"},
    //   {id:1203,  price:24500.59, imgsrc:"assets/images/bed3.jpg"},
    //   {id:1204, price:23050.59, imgsrc:"assets/images/bed4.jpg"}
      
    // ];
  }

  ngOnInit(){
    this.prodService.getProductByCategory("Bed").subscribe((data : any)=>{
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
