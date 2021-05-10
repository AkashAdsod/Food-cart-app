import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipes[] = [
    new Recipes('Test recipe1', 'This is test recipe1', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/epic-summer-salad-7539748.jpg?quality=90&resize=500%2C454')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
