import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }, { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) }, { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }, { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
