import { Component, Input } from '@angular/core';
import { RecepieModel } from '../../recepie.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipie: RecepieModel;
  constructor() {}
}
