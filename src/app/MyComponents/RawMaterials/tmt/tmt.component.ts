import { Component } from '@angular/core';
import { CartService } from 'src/app/MyServices/cart.service';
import { ProductService } from 'src/app/MyServices/product.service';

@Component({
  selector: 'app-tmt',
  templateUrl: './tmt.component.html',
  styleUrls: ['./tmt.component.css']
})
export class TmtComponent {

  products: any;

  constructor(private service: CartService, private prodService: ProductService) { 


    // this.products = [
    //   {id:8001, name:"Birla TMT Steel – Fe 500",   price:820.80, imgsrc:"assets/images/con-birla-tmt-steel.jpg"},
    //   {id:8002, name:"Jindal TMT Steel – Fe 500",  price:920.99, imgsrc:"assets/images/con-jindal-500-steel.jpg"},
    //   {id:8003, name:"Jairaj TMT Steel – Fe 550",  price:890.59, imgsrc:"assets/images/con-jairaj-tmt-steel.jpg"},
    //   {id:8004, name:"JSW TMT Steel – Fe 550",     price:825.39, imgsrc:"assets/images/con-jsw-tmt-steel-3-315x473.jpg"},
    //   {id:8005, name:"Devi TMT Steel – Fe 500",    price:680.90, imgsrc:"assets/images/con-kamdhenu-tmt-steel.jpg"},
    //   {id:8006, name:"Mangal TMT Steel – Fe 500",  price:720.99, imgsrc:"assets/images/con-tmt-500-steel.jpg"},
    //   {id:8007, name:"Mangal TMT Steel – Fe 550",  price:800.95, imgsrc:"assets/images/con-tmt-550-steel.jpg"},
    //   {id:8008, name:"Laxmi TMT Steel – Fe 500",   price:700.99, imgsrc:"assets/images/con-tmt-600-steel.jpg"}
    // ];
  }

  ngOnInit(){
    this.prodService.getProductByCategory("Tmt").subscribe((data : any)=>{
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
