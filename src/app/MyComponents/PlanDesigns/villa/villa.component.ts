import { Component } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { CartService } from 'src/app/MyServices/cart.service';

@Component({
  selector: 'app-villa',
  templateUrl: './villa.component.html',
  styleUrls: ['./villa.component.css']
})
export class VillaComponent {

  showPopup = false;
  consultation : any;
  constructor( private toast : HotToastService, private service : CartService){

    this.consultation ={
      userName : '',
      phoneNumber : '',
      emailId : '',
      property : '',
      design : ''}
  }
  openPopup2(): void {
    this.showPopup = true;
  }

  closePopup2(): void {
    this.showPopup = false;
  }

  bookConsultaion() {
    this.toast.success('Your Consultation is booked!!');
    
    console.log(this.consultation);
    this.service.regitsterConsultation(this.consultation).subscribe((res: any)=>{console.log(res);});
  }
  popupImage: string | null = null;
  popupAlt: string | null = null;

  openPopup(imageUrl: string, altText: string): void {
    this.popupImage = imageUrl;
    this.popupAlt = altText;
  }

  closePopup(): void {
    this.popupImage = null;
    this.popupAlt = null;
  }
}
