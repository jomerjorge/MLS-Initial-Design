import { Component, OnInit} from '@angular/core';
import { products} from '../../../../Sample-data/sample-data';

@Component({
  selector: 'app-welcome',
  /*template: `<tbody>
              <tr *ngFor="let product of products; let i =index">
                <td>{{i}}</td>
                <td>{{product.name}}</td>
              </tr>
            </tbody>`,*/
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

products = products;

  constructor() { 
   // debugger;
  }
  
  ngOnInit() {
    console.log(products);
  }

  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
}

