import { Component } from '@angular/core';
import { CartService } from 'src/app/MyServices/cart.service';
import { ProductService } from 'src/app/MyServices/product.service';
import { UserService } from 'src/app/MyServices/user.service';

@Component({
  selector: 'app-vases',
  templateUrl: './vases.component.html',
  styleUrls: ['./vases.component.css']
})
export class VasesComponent {
  products: any;

  constructor(private service: CartService, private prodService: ProductService) { 

    // this.products = [
    //   {id:1601, price:250.80, imgsrc:"assets/images/vases1.jpg"},
    //   {id:1602, price:255.99, imgsrc:"assets/images/vases2.jpg"},
    //   {id:1603, price:249.59, imgsrc:"assets/images/vases3.jpg"},
    //   {id:1604, price:350.99, imgsrc:"assets/images/vases4.jpg"}
    // ];
  }

  ngOnInit(){
    this.prodService.getProductByCategory("Vases").subscribe((data : any)=>{
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
