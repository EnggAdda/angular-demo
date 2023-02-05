import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { ProductComponent } from './product/product.component';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';






@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    ProductComponent,
    UserComponent,





  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
