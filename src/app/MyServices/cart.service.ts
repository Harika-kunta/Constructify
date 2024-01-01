import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { BehaviorSubject, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any =[];
  productList = new BehaviorSubject<any>([]);

  order: any;
  
  constructor(private http: HttpClient, private toast: HotToastService) { }

  // Get product List
  getProductData(): any {
    return this.productList.asObservable();
  }

  // Set product into List
  setProduct(product: any){
    this.cartItems.push(...product);
    this.productList.next(product);
  }

  // Add one item to cart
  addToCart(product: any) {
    const productExits = this.cartItems.find((item : any) => item.prodId==product.prodId);
    if(productExits){
      // alert("Item alredy exits in Cart!!")
      this.toast.error('Item alredy exits in Cart!!')
    }else{
    this.cartItems.push(product);
    this.productList.next(this.cartItems);
    this.toast.success('Item added to cart!!')
    console.log(this.cartItems);
    this.getToatalAmount();
  }
  }

  // Get Total Amount
  getToatalAmount(){
    let grandTotal = 0;
    this.cartItems.map((a: any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  // Remove single product
  removeItem(product: any){
    this.cartItems.map((a: any, index: any)=>{
      if(product.prodId == a.prodId)
      {
        this.cartItems.splice(index, 1)
      }
    })
    this.productList.next(this.cartItems);
  }

  // Remove all products from cart
  emptyCart(){
    this.cartItems = [];
    this.productList.next(this.cartItems);
  }

  getAllOrders(){
    return this.http.get<any>('getAllOrders')
    .pipe(map((res:any)=>{
      return res;
    }));
  }

  getAllConsultations(){
    return this.http.get<any>('getAllConsultations')
    .pipe(map((res:any)=>{
      return res;
    }));
  }

  getOrderByUser(user : any){
    return this.http.get("getOrderByUser/"+ user);
  }

  regitsterOrder(order: any){
    return this.http.post('/registerOrder/', order);
  }

  regitsterConsultation(consultation: any){
    return this.http.post('/registerConsultation/', consultation);
  }

  getOrder(){
    return this.order;
  }
  setOrder(order:any){
    this.order = order;
  }
  
}
