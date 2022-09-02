import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ItemsService } from '../../services/items.service';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {

  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  let service: ItemsService;
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
            getItems: () => of([{ id: 123, thumbnailUrl: '/test/thumburl', url: 'test/url', title: 'test title' }])
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

  it('should call serivce onInit', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.items$).toBeTruthy();
  });


});
