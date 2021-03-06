import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';

import { AppService } from './app.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { NewProductComponent } from './new-product/new-product.component';
import { CategoryService } from './services/category.service';
import { ProductsService } from './services/products.service';
import { CustomValidators } from './models/custom-validators';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingCartComponent,
    LoginComponent,
    HomeComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    SignUpComponent,
    SignInComponent,
    NewProductComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    TextMaskModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'my-orders',
        component: MyOrdersComponent
      },
      {
        path: 'admin/orders',
        component: AdminOrdersComponent
      },
      {
        path: 'admin/products',
        component: AdminProductsComponent
      },
      {
        path: 'admin/products/new-product',
        component: NewProductComponent
      }

    ])
  ],
  providers: [
    AppService,
    UserService,
    AuthService,
    CategoryService,
    ProductsService,
    CustomValidators,
    ShoppingCartService
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
