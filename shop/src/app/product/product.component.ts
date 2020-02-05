import { Component, OnInit } from '@angular/core';
import { Product } from './product';
declare let alertify:any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Ürün Listesi"

  filterText = "";
  products : Product[] =
  [
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus ZenBook",imageUrl:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"},

    {id:2, name:"Mouse", price:50, categoryId:2, description:"A4 Tech",imageUrl:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80"},

    {id:3, name:"Laptop", price:2500, categoryId:3, description:"Asus ZenBook",imageUrl:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"},

    {id:4, name:"Mouse", price:50, categoryId:4, description:"A4 Tech",imageUrl:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80"},

    {id:5, name:"Laptop", price:2500, categoryId:5, description:"Asus ZenBook",imageUrl:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"},

    {id:6, name:"Mouse", price:50, categoryId:6, description:"A4 Tech",imageUrl:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80"},
  ];

  ngOnInit() {
  }

  addToCart(product){
    alertify.success(product.name + " Eklendi")
  }

}
