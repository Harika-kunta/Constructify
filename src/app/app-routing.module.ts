import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './MyComponents/cart/cart.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { LogoutComponent } from './MyComponents/logout/logout.component';
import { ProductsComponent } from './MyComponents/products/products.component';
import { DesignComponent } from './MyComponents/design/design.component';
import { RegisterComponent } from './MyComponents/register/register.component';

import { AuthGuard } from './auth.guard';
import { CementComponent } from './MyComponents/RawMaterials/cement/cement.component';
import { AccBlocksComponent } from './MyComponents/RawMaterials/acc-blocks/acc-blocks.component';
import { AggregatesComponent } from './MyComponents/RawMaterials/aggregates/aggregates.component';
import { RedBricksComponent } from './MyComponents/RawMaterials/red-bricks/red-bricks.component';
import { SandComponent } from './MyComponents/RawMaterials/sand/sand.component';
import { TmtComponent } from './MyComponents/RawMaterials/tmt/tmt.component';
import { WoodComponent } from './MyComponents/RawMaterials/wood/wood.component';
import { KitchenComponent } from './MyComponents/PlanDesigns/kitchen/kitchen.component';
import { SpaceSavingComponent } from './MyComponents/PlanDesigns/space-saving/space-saving.component';
import { LivingroomComponent } from './MyComponents/PlanDesigns/livingroom/livingroom.component';
import { BalconyComponent } from './MyComponents/PlanDesigns/balcony/balcony.component';
import { DiningComponent } from './MyComponents/PlanDesigns/dining/dining.component';
import { HomeOfficeComponent } from './MyComponents/PlanDesigns/home-office/home-office.component';
import { BedroomComponent } from './MyComponents/PlanDesigns/bedroom/bedroom.component';
import { BathroomComponent } from './MyComponents/PlanDesigns/bathroom/bathroom.component';
import { AboutUsComponent } from './MyComponents/about-us/about-us.component';
import { VillaComponent } from './MyComponents/PlanDesigns/villa/villa.component';
import { ApartmentComponent } from './MyComponents/PlanDesigns/apartment/apartment.component';
import { BuildingComponent } from './MyComponents/PlanDesigns/building/building.component';
import { AdminPageComponent } from './MyComponents/admin-page/admin-page.component';
import { BedComponent } from './MyComponents/RawMaterials/bed/bed.component';
import { SofaComponent } from './MyComponents/RawMaterials/sofa/sofa.component';
import { ShandlerComponent } from './MyComponents/RawMaterials/shandler/shandler.component';
import { ChairComponent } from './MyComponents/RawMaterials/chair/chair.component';
import { VasesComponent } from './MyComponents/RawMaterials/vases/vases.component';
import { OrderSummaryComponent } from './MyComponents/order-summary/order-summary.component';
import { MyOrdersComponent } from './MyComponents/my-orders/my-orders.component';
import { ContactUsComponent } from './MyComponents/contact-us/contact-us.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"Login", component:LoginComponent},
  {path:"ContactUs", component:ContactUsComponent},
  {path:"Login/Register", component:RegisterComponent},
  {path:"AdminPage", component:AdminPageComponent},
  {path:"Home", component:HomeComponent},
  {path:"Products/Cement", component:CementComponent},
  {path:"Products/AccBlock", component:AccBlocksComponent},
  {path:"Products/Aggregates", component:AggregatesComponent},
  {path:"Products/RedBricks", component:RedBricksComponent},
  {path:"Products/Sand", component:SandComponent},
  {path:"Products/Tmt", component:TmtComponent},
  {path:"Products/Wood", component:WoodComponent},
  {path:"Products/Bed", component:BedComponent},
  {path:"Products/Sofa", component:SofaComponent},
  {path:"Products/Chair", component:ChairComponent},
  {path:"Products/Vases", component:VasesComponent},
  {path:"Products/Chandelier", component:ShandlerComponent},
  {path:"Design/Kitchen", component:KitchenComponent},
  {path:"Design/Bathroom", component:BathroomComponent},
  {path:"Design/Bedroom", component:BedroomComponent},
  {path:"Design/Homeoffice", component:HomeOfficeComponent},
  {path:"Design/Dining", component:DiningComponent},
  {path:"Design/Balcony", component:BalconyComponent},
  {path:"Design/Livingroom", component:LivingroomComponent},
  {path:"Design/Villa", component:VillaComponent},
  {path:"Design/Apartment", component:ApartmentComponent},
  {path:"Design/Building", component:BuildingComponent},
  {path:"Design/SpaceSaving", component:SpaceSavingComponent},
  {path:"Products",  component:ProductsComponent},
  {path:"AboutUs",  component:AboutUsComponent},
  {path:"Design", component:DesignComponent},
  {path:"Cart",    component:CartComponent},
  {path:"OrderSummary",   canActivate:[AuthGuard], component:OrderSummaryComponent},
  {path:"MyOrders",   canActivate:[AuthGuard], component:MyOrdersComponent},
  {path:"Logout",    canActivate:[AuthGuard], component:LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
