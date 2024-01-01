import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { RegisterComponent } from './MyComponents/register/register.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { LogoutComponent } from './MyComponents/logout/logout.component';

import { DesignComponent } from './MyComponents/design/design.component';
import { ProductsComponent } from './MyComponents/products/products.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { CartComponent } from './MyComponents/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { CementComponent } from './MyComponents/RawMaterials/cement/cement.component';
import { AggregatesComponent } from './MyComponents/RawMaterials/aggregates/aggregates.component';
import { AccBlocksComponent } from './MyComponents/RawMaterials/acc-blocks/acc-blocks.component';
import { WoodComponent } from './MyComponents/RawMaterials/wood/wood.component';
import { TmtComponent } from './MyComponents/RawMaterials/tmt/tmt.component';
import { RedBricksComponent } from './MyComponents/RawMaterials/red-bricks/red-bricks.component';
import { SandComponent } from './MyComponents/RawMaterials/sand/sand.component';
import { KitchenComponent } from './MyComponents/PlanDesigns/kitchen/kitchen.component';
import { LivingroomComponent } from './MyComponents/PlanDesigns/livingroom/livingroom.component';
import { BedroomComponent } from './MyComponents/PlanDesigns/bedroom/bedroom.component';
import { HomeOfficeComponent } from './MyComponents/PlanDesigns/home-office/home-office.component';
import { SpaceSavingComponent } from './MyComponents/PlanDesigns/space-saving/space-saving.component';
import { BathroomComponent } from './MyComponents/PlanDesigns/bathroom/bathroom.component';
import { AboutUsComponent } from './MyComponents/about-us/about-us.component';
import { BalconyComponent } from './MyComponents/PlanDesigns/balcony/balcony.component';
import { DiningComponent } from './MyComponents/PlanDesigns/dining/dining.component';
import { VillaComponent } from './MyComponents/PlanDesigns/villa/villa.component';
import { ApartmentComponent } from './MyComponents/PlanDesigns/apartment/apartment.component';
import { BuildingComponent } from './MyComponents/PlanDesigns/building/building.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { AdminPageComponent } from './MyComponents/admin-page/admin-page.component';
import { BedComponent } from './MyComponents/RawMaterials/bed/bed.component';
import { SofaComponent } from './MyComponents/RawMaterials/sofa/sofa.component';
import { ChairComponent } from './MyComponents/RawMaterials/chair/chair.component';
import { VasesComponent } from './MyComponents/RawMaterials/vases/vases.component';
import { ShandlerComponent } from './MyComponents/RawMaterials/shandler/shandler.component';
import { OrderSummaryComponent } from './MyComponents/order-summary/order-summary.component';
import { MyOrdersComponent } from './MyComponents/my-orders/my-orders.component';
import { ContactUsComponent } from './MyComponents/contact-us/contact-us.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { EncrypDcrypService } from './MyServices/encryp-dcryp.service';
import { CalcComponent } from './MyComponents/calc/calc.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactUsComponent,
    RegisterComponent,
    HomeComponent,
    LogoutComponent,
    AdminPageComponent,
    DesignComponent,
    ProductsComponent,
    HeaderComponent,
    CartComponent,
    CementComponent,
    AggregatesComponent,
    AccBlocksComponent,
    WoodComponent,
    TmtComponent,
    RedBricksComponent,
    SandComponent,
    KitchenComponent,
    LivingroomComponent,
    BedroomComponent,
    HomeOfficeComponent,
    SpaceSavingComponent,
    BathroomComponent,
    AboutUsComponent,
    BalconyComponent,
    DiningComponent,
    VillaComponent,
    ApartmentComponent,
    BuildingComponent,
    FooterComponent,
    BedComponent,
    SofaComponent,
    ChairComponent,
    VasesComponent,
    ShandlerComponent,
    OrderSummaryComponent,
    MyOrdersComponent,
    CalcComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    SocialLoginModule,
    HotToastModule.forRoot(
      {
        position: 'top-center',
      }
    ),
    GoogleSigninButtonModule,
    
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '748636764044-qafr051f945o1nodns2nu8q9vd3u0s9l.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }