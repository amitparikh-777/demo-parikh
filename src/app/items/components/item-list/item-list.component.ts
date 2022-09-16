import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { Observable, Subject, takeUntil } from 'rxjs';
// import { take, tap } from 'rxjs/operators';
import { Item } from '../../models/item.types';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  public items$: Observable<Item[]>;
  // private itemsMap = new Map<number, Item>();

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.prepareItems();
  }

  prepareItems() {
    this.items$ = this.itemsService.getItems();
  }

  // Storage could be used to display a detail of an item
  // storeItems(items: Item[]): void {
  //   if (!!!this.itemsMap.size) {
  //     items.forEach((i: Item) => {
  //       this.itemsMap.set(i.id, i);
  //     });
  //   }
  // }
}
