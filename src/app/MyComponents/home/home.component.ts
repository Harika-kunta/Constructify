import { Component, AfterViewInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import * as $ from 'jquery';
import { CartService } from 'src/app/MyServices/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
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

  // updateActiveSlide(dotIndex: number): void {
  //   const carouselContainer = $('.carousel-container');
  //   const carousel = carouselContainer.find('.carousel');
  //   const carouselDots = carouselContainer.find('.carousel-dots .dot');

  //   let cardWidth = 0;
  //   if (carousel.find('.card').length > 0) {
  //     cardWidth = carousel.find('.card').outerWidth() || 0;
  //   }

  //   const activeSlideIndex = dotIndex;

  //   carousel.animate({
  //     left: -activeSlideIndex * cardWidth + 'px'
  //   });

  //   carouselDots.removeClass('active');
  //   carouselDots.eq(activeSlideIndex).addClass('active');
  // }

  // ngAfterViewInit(): void {
  //   const carouselContainer = $('.carousel-container');
  //   const carousel = carouselContainer.find('.carousel');
  //   const carouselDots = carouselContainer.find('.carousel-dots .dot');

  //   let cardWidth = 0;
  //   if (carousel.find('.card').length > 0) {
  //     cardWidth = carousel.find('.card').outerWidth() || 0;
  //   }

  //   let activeSlideIndex = 0;

  //   const updateActiveSlide = (dotIndex: number) => {
  //     activeSlideIndex = dotIndex;
  //     carousel.animate({
  //       left: -activeSlideIndex * cardWidth + 'px'
  //     });
  //     carouselDots.removeClass('active');
  //     carouselDots.eq(activeSlideIndex).addClass('active');
  //   };

  //   updateActiveSlide(activeSlideIndex);

  //   carouselDots.click(() => {
  //     const dotIndex = $(this).index();
  //     updateActiveSlide(dotIndex);
  //   });
  // }
}
