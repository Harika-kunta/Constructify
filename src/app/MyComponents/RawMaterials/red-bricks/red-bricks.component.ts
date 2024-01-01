import { Component } from '@angular/core';
import { CartService } from 'src/app/MyServices/cart.service';
import { ProductService } from 'src/app/MyServices/product.service';


@Component({
  selector: 'app-red-bricks',
  templateUrl: './red-bricks.component.html',
  styleUrls: ['./red-bricks.component.css']
})
export class RedBricksComponent {

  products: any;

  constructor(private service: CartService, private prodService: ProductService) { 

    // this.products = [
    //   {id:5001, name:"Karimnagar Brick",          price:1.80, imgsrc:"assets/images/con- redbrick-karimnagar.jpg"},
    //   {id:5002, name:"Karimnagar ABP Red Brick",  price:1.99, imgsrc:"assets/images/abp--karimnagar-red-brick.jpg"},
    //   {id:5003, name:"ABP Red Brick",             price:2.59, imgsrc:"assets/images/con-abp-bricks.jpg"},
    //   {id:5004, name:"PVC Red Brick",             price:2.39, imgsrc:"assets/images/con-pvc-brick.jpg"},
    //   {id:5005, name:"RBS Red Brick",             price:2.90, imgsrc:"assets/images/con-rbs-brick.jpg"},
    //   {id:5006, name:"Local CBI Red Brick",       price:2.99, imgsrc:"assets/images/con-cbi-red-brick.jpg"},
    //   {id:5007, name:"Local SLS Red Brick",       price:1.95, imgsrc:"assets/images/con-sls-red-brick.jpg"},
    //   {id:5008, name:"VBI Red Brick",             price:1.99, imgsrc:"assets/images/con-vbi-brick.jpg"}
    // ];
  }

  ngOnInit(){
    this.prodService.getProductByCategory("Red Bricks").subscribe((data : any)=>{
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
