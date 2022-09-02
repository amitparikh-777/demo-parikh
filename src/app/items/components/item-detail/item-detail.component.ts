import { Component, Input } from '@angular/core';
import { Item } from '../../models/item.types';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {
  @Input() item: Item;
  @Input() index: number;
}