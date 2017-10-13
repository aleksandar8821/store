import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { BuyersComponent } from '../components/buyers/buyers.component';
import { ProductsComponent } from '../components/products/products.component';


const appRoutes = [
	{path: 'products', component: ProductsComponent},
	{path: 'buyers', component: BuyersComponent}

]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )

  ],
  declarations: [],
  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }
