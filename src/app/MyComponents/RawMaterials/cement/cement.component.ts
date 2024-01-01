import { Component } from '@angular/core';
import { ProductService } from 'src/app/MyServices/product.service';
import { CartService } from 'src/app/MyServices/cart.service';

@Component({
  selector: 'app-cement',
  templateUrl: './cement.component.html',
  styleUrls: ['./cement.component.css']
})
export class CementComponent {

  products: any;

  constructor(private service: CartService, private prodService : ProductService) {
  

    // this.products = [
    //   {id:3001, name:"KCP Cement",         price:50.80, imgsrc:"assets/images/con-kcp-cement.jpg"},
    //   {id:3002, name:"ACC PPC",            price:70.99, imgsrc:"assets/images/con-acc-ppc.jpg"},
    //   {id:3003, name:"ACC Concrete",       price:60.59, imgsrc:"assets/images/con-acc-concrete.jpg"},
    //   {id:3004, name:"Priya Cement",       price:65.39, imgsrc:"assets/images/con-priya-ppc.jpg"},
    //   {id:3005, name:"Bharathi Cement",    price:85.90, imgsrc:"assets/images/con-bharathi-ppc.jpg"},
    //   {id:3006, name:"UltraTech Cement",   price:80.99, imgsrc:"assets/images/con-ultratech-cement.jpg"},
    //   {id:3007, name:"Birlashakti Cement", price:60.95, imgsrc:"assets/images/con-birlashakti-ppc.jpg"},
    //   {id:3008, name:"Nagarjuna Cement",   price:55.99, imgsrc:"assets/images/con-nagarjuna-ppc.jpg"}
    // ];
   }

  ngOnInit(){
    this.prodService.getProductByCategory("Cement").subscribe((data : any)=>{
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
