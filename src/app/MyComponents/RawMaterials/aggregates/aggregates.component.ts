import { Component } from '@angular/core';
import { CartService } from 'src/app/MyServices/cart.service';
import { ProductService } from 'src/app/MyServices/product.service';

@Component({
  selector: 'app-aggregates',
  templateUrl: './aggregates.component.html',
  styleUrls: ['./aggregates.component.css']
})
export class AggregatesComponent {

  products: any;

  constructor(private service: CartService, private prodService: ProductService) { 

    // this.products = [
    //   {id:2001, name:"6mm Aggregate",  price:700.99, imgsrc:"assets/images/6-mm-Aggregates.jpg"},
    //   {id:2002, name:"12mm Aggregate", price:650.99, imgsrc:"assets/images/12-mm-aggrigates.jpg"},
    //   {id:2003, name:"20mm Aggregate", price:500.99, imgsrc:"assets/images/20-mm-aggregates.jpg"},
    //   {id:2004, name:"40mm Aggregate", price:710.99, imgsrc:"assets/images/40-mm-aggregates-images.jpg"},
    // ];
  }

    ngOnInit(){
    this.prodService.getProductByCategory("Aggregates").subscribe((data : any)=>{
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
