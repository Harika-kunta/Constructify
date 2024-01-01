import { Component } from '@angular/core';
import { CartService } from 'src/app/MyServices/cart.service';
import { ProductService } from 'src/app/MyServices/product.service';

@Component({
  selector: 'app-wood',
  templateUrl: './wood.component.html',
  styleUrls: ['./wood.component.css']
})
export class WoodComponent {

  products: any;

  constructor(private service: CartService, private prodService: ProductService) { 

    // this.products = [
    //   {id:9001, name:"Century Marine Plywood",  price:19.80, imgsrc:"assets/images/Century-Bond-710-BWP-Marine-Plywood.jpg"},
    //   {id:9002, name:"Century Club Prime ",     price:20.99, imgsrc:"assets/images/Century-Club-Prime-Marine-BWP-.jpg"},
    //   {id:9003, name:"Century Film Face",       price:19.59, imgsrc:"assets/images/Century-Film-Face-1.jpg"},
    //   {id:9004, name:"Century PF Blockboard",   price:21.39, imgsrc:"assets/images/Century-OF-Block-Board-30mm.jpg"},
    //   {id:9005, name:"Century Sainik Ply",      price:19.90, imgsrc:"assets/images/Century-Sainik-PF-Blockboard.jpg"},
    //   {id:9006, name:"Century Sainik PF Ply",   price:20.99, imgsrc:"assets/images/Century-Sainik-PF-Ply.jpg"},
    //   {id:9007, name:"Century Architect Ply",   price:18.95, imgsrc:"assets/images/Century-Architect-Ply-4mm.jpg"},
    //   {id:9008, name:"Century Prime",           price:19.99, imgsrc:"assets/images/Century-Club-Prime-Marine-BWP.jpg"}
    // ];
  }

  ngOnInit(){
    this.prodService.getProductByCategory("Wood").subscribe((data : any)=>{
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
