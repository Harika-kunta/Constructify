import { Component } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { CartService } from 'src/app/MyServices/cart.service';
import { ProductService } from 'src/app/MyServices/product.service';
import { UserService } from 'src/app/MyServices/user.service';

//Declare the jQuery variable at the top.
declare var jQuery: any;

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  user : any;
  products : any;
  orders: any;
  consultations: any;
  prodObj : any;
  update = false;
  add = false;


  constructor(
    private service: UserService, 
    private prodService: ProductService, 
    private cartService: CartService, 
    private toast : HotToastService
    ) { 
    this.prodObj = {prodId:'', prodName:'', prodImg:'', price:'', category:'', type:''};
  }

  ngOnInit() {
    this.service.getAllUsers().subscribe((userData: any) => { this.user = userData;});
    this.cartService.getAllOrders().subscribe((orders: any) => {this.orders = orders;});
    this.prodService.getAllProducts().subscribe((data: any) => { this.products = data;});
    this.cartService.getAllConsultations().subscribe((data: any) => { this.consultations = data;});
  }

  openPopup(prod: any) {
    this.prodObj = prod;
    this.update = true;
  }

  closePopup(): void {
    this.update = false;
    this.add = false;
  }



  // editProduct(prod: any) {
  //   this.prodObj = prod;

  //   //Declare the jQuery variable at the top.
  //   jQuery('#editProduct').modal('show');
  //   alert("dialogue box opened!!");
   
  // }

  updateProduct() {
    this.prodService.updateProduct(this.prodObj).subscribe((prodData:any) => {console.log(prodData);});
    this.toast.success('Product updated successfully!!');
  }
  addNewProduct(){
    this.add = true;
  }

  addProduct(regFrom: any) {
    this.prodObj.prodId = regFrom.prodId;
    this.prodObj.prodName = regFrom.prodName;
    this.prodObj.prodImg = regFrom.prodImg;
    this.prodObj.price = regFrom.price;
    this.prodObj.category = regFrom.category;
    this.prodObj.type = regFrom.type;
    
    this.prodService.addProduct(this.prodObj).subscribe((data: any) => {
      console.log(data);
      // alert("product added successfully!!");
      this.toast.success('Product added successfully!!');
    });
    
  }

  deleteProduct(prodId: any) {
    this.prodService.deleteProduct(prodId).subscribe((data: any) => {
      console.log(data);
    });

    const i = this.products.findIndex((product: any) => {
      return product.prodId == prodId;
    });

    this.products.splice(i, 1);
    this.toast.success('Product deleted successfully!!');
  }

}
