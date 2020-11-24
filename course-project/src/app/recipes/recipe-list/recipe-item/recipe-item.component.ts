import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../models/recepie.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipe: RecipeModel;
  @Input() index: number;
}
