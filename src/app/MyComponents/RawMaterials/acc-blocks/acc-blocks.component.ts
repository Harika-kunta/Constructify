import { Component } from '@angular/core';
import { CartService } from 'src/app/MyServices/cart.service';
import { ProductService } from 'src/app/MyServices/product.service';

@Component({
  selector: 'app-acc-blocks',
  templateUrl: './acc-blocks.component.html',
  styleUrls: ['./acc-blocks.component.css']
})
export class AccBlocksComponent {

  products: any;
 
  constructor(private service: CartService, private prodService: ProductService) { 
    

    // this.products = [
    //   {id:1001, name:"Birla Aerocon AAC Blocks",   price:1.80, imgsrc:"assets/images/Birla-Aerocon-AAC-Blocks-min-315x473.jpg"},
    //   {id:1002, name:"Ultratech AAC Blocks",       price:2.99, imgsrc:"assets/images/con-ultratech-blocks.jpg"},
    //   {id:1003, name:"Aerobild ACC Blocks",        price:1.59, imgsrc:"assets/images/con-aerobild-blocks.jpg"},
    //   {id:1004, name:"Greenstone AAC Blocks",      price:2.39, imgsrc:"assets/images/con-greenstone-blocks-315x473.jpg"},
    //   {id:1005, name:"Prime AAC Blocks",           price:1.90, imgsrc:"assets/images/con-prime-blocks-315x473.jpg"},
    //   {id:1006, name:"Renacon AAC Blocks",         price:2.99, imgsrc:"assets/images/con-renacon-blocks.jpg"},
    //   {id:1007, name:"Shree Shakthi AAC Blocks",   price:1.95, imgsrc:"assets/images/con-shreeshakthi-blocks-315x473.jpg"},
    //   {id:1008, name:"AAC Blocks",                 price:1.99, imgsrc:"assets/images/ACCblocks.jpg"}
    // ];
  }

  ngOnInit(){
    this.prodService.getProductByCategory("ACC Block").subscribe((data : any)=>{
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
