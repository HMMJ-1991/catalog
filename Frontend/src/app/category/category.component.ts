import {Component, OnInit} from '@angular/core';
import { Category } from '../category';
import categories from '../files/categories.json'

@Component({
  selector: "app-category",
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.css']
})

export class CategoryComponent implements OnInit{

  header : string='Homepage';
  // categoryList : string[];
  categoryList : Category[];
  category : string;
  categorySelected : string;
  categorySelectedId : string;
  id : string;
  name : string;

  constructor(){

    this.categoryList = categories;
   // this.categoryList = [ { id:'001', name:'Furniture'}, {id:'002', name:'Cosmatics'}, {id:'003', name:'Food'}, {id:'004', name:'Stationary Items'}];
   // this.categoryList = [ 'Furniture', 'Cosmatics', 'Food', 'Stationary Items'];
   // this.category = this.categoryList[0];
   this.categorySelected = this.categoryList[0].name;
   this.categorySelectedId = this.categoryList[0].id;
   console.log(this.categoryList[0].name);

  }


  selectCategory(category){
    this.categorySelected = category.name;
    this.categorySelectedId = category.id;

  }

  ngOnInit(){

  }

}
