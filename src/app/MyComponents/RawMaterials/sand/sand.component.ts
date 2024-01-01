import { Component } from '@angular/core';
import { CartService } from 'src/app/MyServices/cart.service';
import { ProductService } from 'src/app/MyServices/product.service';

@Component({
  selector: 'app-sand',
  templateUrl: './sand.component.html',
  styleUrls: ['./sand.component.css']
})
export class SandComponent {

  products: any;

  constructor(private service: CartService, private prodService: ProductService) {

    // this.products = [
    //   {id:6001, name:"Refined Sand",   price:2000.00, imgsrc:"assets/images/Refined-Sand.jpg"},
    // ];
   }

   ngOnInit(){
    this.prodService.getProductByCategory("Sand").subscribe((data : any)=>{
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
