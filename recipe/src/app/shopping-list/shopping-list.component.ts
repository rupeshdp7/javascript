import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[]=[
    new Ingredient('Apple', 44),
    new Ingredient('Mobile', 21),
    new Ingredient('Book', 43),
    new Ingredient('Bag', 12)
  ];
  constructor() { }

  ngOnInit() {
  }

}
