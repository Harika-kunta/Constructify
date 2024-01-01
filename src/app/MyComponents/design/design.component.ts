import { Component, ElementRef, ViewChild } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import * as $ from 'jquery';
import { CartService } from 'src/app/MyServices/cart.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent {

  @ViewChild('interiorCarousel') interiorCarousel!: ElementRef;
  @ViewChild('exteriorCarousel') exteriorCarousel!: ElementRef;

  currentInteriorSlide = 0;
  currentExteriorSlide = 0;
  consultation : any;
  showPopup = false;
  constructor( private toast : HotToastService, private service : CartService){

    this.consultation ={
      userName : '',
      phoneNumber : '',
      emailId : '',
      property : '',
      design : ''}
  }
  

  openPopup(): void {
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
  }

  bookConsultaion() {
    this.toast.success('Your Consultation is booked!!');
    
    console.log(this.consultation);
    this.service.regitsterConsultation(this.consultation).subscribe((res: any)=>{console.log(res);});
  }

  calculateVisibleCards(carouselElement: HTMLElement): number {
    const carouselWidth = carouselElement.offsetWidth;
    const cardWidth = carouselElement.querySelector('.card')?.clientWidth || 0; // Get the width of the first card
    return Math.floor(carouselWidth / cardWidth);
  }

  goToPrevious(type: 'interior' | 'exterior') {
    const carouselElement: HTMLElement = type === 'interior'
      ? this.interiorCarousel.nativeElement
      : this.exteriorCarousel.nativeElement;

    const cardWidth = carouselElement.offsetWidth / 4;
    const scrollAmount = Math.min(carouselElement.scrollLeft, cardWidth);

    carouselElement.scrollLeft -= scrollAmount;
  }

  goToNext(type: 'interior' | 'exterior') {
    const carouselElement: HTMLElement = type === 'interior'
      ? this.interiorCarousel.nativeElement
      : this.exteriorCarousel.nativeElement;

    const cardWidth = carouselElement.offsetWidth / 4;
  const scrollAmount = Math.min(
    carouselElement.scrollWidth - carouselElement.scrollLeft - carouselElement.offsetWidth,
    cardWidth
  );

  carouselElement.scrollLeft += scrollAmount;
  }
  
}
