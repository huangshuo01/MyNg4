import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  list = ['1', '2', '3', '4', '5'];
  constructor() { }

  ngOnInit() {
    $('.dropify').dropify({
      messages: {
      }
    });
  }
}
