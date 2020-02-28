import { Component, OnInit } from '@angular/core';
import { products} from '../../../../../../libs/Sample-data/sample-data';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

products = products;
  constructor() { }

  ngOnInit() {
  }

}
