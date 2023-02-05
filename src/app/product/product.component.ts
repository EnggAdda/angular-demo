import { Component } from '@angular/core';
import { Product } from './product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  // product: Product ={

  //   id: 101,
  //   name: 'Mobile',
  //   price: 10000,
  //   quantity:1
  // }

   products :any
  constructor() {

     this.products = [{

       id: 101,
     name: 'Mobile',
     price: 10000,
    quantity:1

  },

  {

    id: 102,
  name: 'Laptop',
  price: 50000,
 quantity:1

},
     ]}

}
