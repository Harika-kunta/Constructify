import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { CartService } from 'src/app/MyServices/cart.service';
import { EncrypDcrypService } from 'src/app/MyServices/encryp-dcryp.service';
import { UserService } from 'src/app/MyServices/user.service';

declare var Razorpay: any;

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {

  user: any; 
  userObj: any;
  order: any;
  regOrder : any;
  amount: any;
  update = false;
  showPasswordField = false;
  constructor(
    private service: CartService, 
    private route: Router, 
    private userService: UserService,
    private toast: HotToastService,
    private encrdcr: EncrypDcrypService
    ) {
    
    this.userObj = {userId:'', userName:'', address:'', contactNo:'', emailId:'', password:''};
    this.regOrder = {id: '', userName: '', emailId: '', products: '', amount: ''};
    // this.order = this.service.getOrder();
    // console.log(this.order);
    

    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      console.log(this.user);
    }
    const orderData = localStorage.getItem('order');
    if (orderData) {
      this.order = JSON.parse(orderData);
      console.log(this.order);
    }
    this.amount = parseFloat(this.order.grandTotal).toFixed(2);
    console.log(this.amount);
    
  }

  ngOnInit(){
    
    // this.user = this.userService.getUser();
    // console.log(this.user.userId);
  }

  openPopup(user: any) {
    this.showPasswordField = user.password === '';
    this.userObj = user;
    this.update = true;
  }

  closePopup(): void {
    this.update = false;
  }

  updateUser(){
    this.showPasswordField = this.userObj.password === '';
    this.userObj.password = this.encrdcr.encryptPassword(this.userObj.password);
    this.userService.updateUser(this.userObj).subscribe((data:any)=>{console.log(data);});
  }

  payNow() {
    const RozarpayOptions = {
      description: 'Sample Razorpay demo',
      currency: 'INR',
      amount: (this.amount) * 100,
      name: 'Constructify',
      key: 'rzp_test_917DLokfY3nGRZ',
      Image: 'https://www.pay.nl/hubfs/Pay.-heeft-een-nieuw-logo%2C-nieuwe-huisstijl-en-een-nieuwe-website-1-1-1.png',
      prefill: {
        name: this.user.userName,
        email: 'surishettyrithu@gmail.com',
        phone: '9898562514'

      },
      theme: {
        color: '#f37254'
      },
      modal: {
        ondismiss: () => {
          console.log('dismissed')
        }
      
      }

    }

    const successCallback = (paymentid: any) => {
      console.log(paymentid);
      this.route.navigate(["Home"]);
    }

    const failureCallback = (e: any) => {
      console.log(e);
    }
    Razorpay.open(RozarpayOptions, successCallback, failureCallback)

    const productNames = this.order.products.map((product: any) => product.prodName);
    this.regOrder = {
      id: 1,
      userName: this.user.userName,
      emailId : this.user.emailId,
      products: productNames.join(', '),
      amount : this.order.grandTotal
    }
    console.log(this.regOrder);
    this.service.regitsterOrder(this.regOrder).subscribe((res : any) => {console.log(res)});
    // alert("Your order is placed!!");
    this.toast.success('Your order is placed!!');
    this.route.navigate(["Home"]);
  }


}
