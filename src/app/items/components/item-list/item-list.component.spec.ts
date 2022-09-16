import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Item } from '../../models/item.types';
import { ItemsService } from '../../services/items.service';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {

  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  let service: ItemsService;

  let mockData: Item[] = [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule
      ],
      declarations: [
        ItemListComponent,
        ItemDetailComponent
      ],
      providers: [
        {
          provide: ItemsService,
          useValue: {
            getItems: () => of(mockData)
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ItemsService);
    fixture.detectChanges();
  });

  it('should create the itemlistcomponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call the prepare items method on init', () => {
    const spy = spyOn(component, "prepareItems").and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should set items$ stream to be service getItems http response called in template', fakeAsync(() => {
    const spyService = spyOn(service, "getItems").and.callThrough();
    component.prepareItems();
    flushMicrotasks();
    fixture.detectChanges();
    expect(spyService).toHaveBeenCalled();
    expect(component.items$).toBeDefined();
    // expect(component.items$).toBeTruthy();
  }));

  it('should return mock items through items$ stream' , fakeAsync(() => {
    const spyService = spyOn(service, "getItems").and.callThrough();
    service.getItems().subscribe((items: Item[]) => {
      const i = items;
      const [firstItem] = items;
      expect(firstItem).toBeDefined();
      expect(firstItem).toEqual({
          "albumId": 1,
          "id": 1,
          "title": "accusamus beatae ad facilis cum similique qui sunt",
          "url": "https://via.placeholder.com/600/92c952",
          "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        });
      expect(items.length).toBe(3);

    })

  }));

});
