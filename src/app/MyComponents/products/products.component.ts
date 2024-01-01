import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CartService } from 'src/app/MyServices/cart.service';
import { ProductService } from 'src/app/MyServices/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  @ViewChild('rawMaterialsCarousel') rawMaterialsCarousel!: ElementRef;
  @ViewChild('furnitureCarousel') furnitureCarousel!: ElementRef;

  currentrawMaterialSlide = 0;
  currentfurnitureSlide = 0;

  category : any[];
  // productList : any;
  constructor( private service : ProductService, private cartService: CartService){
    this.category = [
      {id:9001, name:"Cement", imgsrc:"assets/images/con-kcp-cement.jpg"},
      {id:9001, name:"Aggregate", imgsrc:"assets/images/6-mm-Aggregates.jpg"},
      {id:9001, name:"ACC Block", imgsrc:"assets/images/ACCblocks.jpg"},
      {id:9001, name:"Red Bricks", imgsrc:"assets/images/Redbricks.jpg"},
      {id:9001, name:"Sand", imgsrc:"assets/images/Refined-Sand.jpg"},
      {id:9001, name:"TMT", imgsrc:"assets/images/tmt-bar.jpg"},
      {id:9001, name:"Wood", imgsrc:"assets/images/wood.jpg"}
    ]
  }

  ngOnInit(): void {
    // this.service.getAllProducts().subscribe(res=>{
    //   this.productList = res;
    //   this.productList.forEach((a: any)=>{
    //     Object.assign(a, {quantity: 1, total: a.price})
    //   });
    // })
  }

  // addToCart(item: any){
  //   this.cartService.addToCart(item);
  // }

  calculateVisibleCards(carouselElement: HTMLElement): number {
    const carouselWidth = carouselElement.offsetWidth;
    const cardWidth = carouselElement.querySelector('.card')?.clientWidth || 0; // Get the width of the first card
    return Math.floor(carouselWidth / cardWidth);
  }

  goToPrevious(type: 'rawMaterials' | 'furniture') {
    const carouselElement: HTMLElement = type === 'rawMaterials'
      ? this.rawMaterialsCarousel.nativeElement
      : this.furnitureCarousel.nativeElement;

    const cardWidth = carouselElement.offsetWidth / 4;
    const scrollAmount = Math.min(carouselElement.scrollLeft, cardWidth);

    carouselElement.scrollLeft -= scrollAmount;
  }

  goToNext(type: 'rawMaterials' | 'furniture') {
    const carouselElement: HTMLElement = type === 'rawMaterials'
      ? this.rawMaterialsCarousel.nativeElement
      : this.furnitureCarousel.nativeElement;

    const cardWidth = carouselElement.offsetWidth / 4;
  const scrollAmount = Math.min(
    carouselElement.scrollWidth - carouselElement.scrollLeft - carouselElement.offsetWidth,
    cardWidth
  );

  carouselElement.scrollLeft += scrollAmount;
  }
  
}
