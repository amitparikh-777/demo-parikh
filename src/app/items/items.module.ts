import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, HttpClientModule, MatCardModule, MatButtonModule],
  declarations: [ItemListComponent, ItemDetailComponent],
  exports: [ItemDetailComponent, ItemListComponent],
})
export class ItemsModule {}
