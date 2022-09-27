import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { UpdatePaymentComponent } from './update-payment/update-payment.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'addpayment',component:AddPaymentComponent},
  {path:'contact',component:ContactComponent},
  {path:'paymentlist',component:PaymentListComponent},
 // {path:'update-payment',component:UpdatePaymentComponent},
  {path:'navbar',component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
