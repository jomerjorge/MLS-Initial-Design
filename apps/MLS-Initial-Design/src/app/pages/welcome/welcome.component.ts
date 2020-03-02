import { Component, OnInit, Input } from '@angular/core';
import { products} from '../../../../Sample-data/sample-data';

@Component({
  selector: 'app-welcome',
  /*template: `<table>
                    <thead>
                      <th>Name<th>
                    </thead>
                <tbody>
                    <tr>
                      <td>{{[products.id]}}<td>
                    <tr>
                </tbody>
            </table>`,*/
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

products = products;
// @Input() products: Iproducts[];
  constructor() { 
   // debugger;
  }

  ngOnInit() {
    console.log(products);
  }


}

