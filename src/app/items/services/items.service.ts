import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Item } from '../models/item.types';

@Injectable({ providedIn: 'root' })
export class ItemsService {
  private url = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private readonly http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url).pipe(shareReplay(1));
  }

}
