import { Component } from '@angular/core';
import { CartService } from 'src/app/MyServices/cart.service';
import { ProductService } from 'src/app/MyServices/product.service';
import { UserService } from 'src/app/MyServices/user.service';

@Component({
  selector: 'app-sofa',
  templateUrl: './sofa.component.html',
  styleUrls: ['./sofa.component.css']
})
export class SofaComponent {
  products: any;

  constructor(private service: CartService, private prodService: ProductService) { 

    // this.products = [
    //   {id:1501, price:2000.80, imgsrc:"assets/images/sofa1.jpg"},
    //   {id:1502, price:2100.99, imgsrc:"assets/images/sofa2.jpg"},
    //   {id:1503,  price:1900.59, imgsrc:"assets/images/sofa3.jpg"},
    //   {id:1504,  price:1800.59, imgsrc:"assets/images/sofa4.jpg"}
    // ];
  }

  ngOnInit(){
    this.prodService.getProductByCategory("Sofa").subscribe((data : any)=>{
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
