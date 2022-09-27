import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { UpdatePaymentComponent } from './update-payment/update-payment.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    AddPaymentComponent,
    PaymentListComponent,
    UpdatePaymentComponent,
    NavbarComponent,
    FilterPipe


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
