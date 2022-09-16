import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Item } from '../models/item.types';
import { ItemsService } from './items.service';


describe('ItemsService', () => {
    let service: ItemsService;
    let httpTestingController: HttpTestingController;
    const mockData: Item[] = [
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

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ItemsService]
        });
        service = TestBed.inject(ItemsService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('items service should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return items', () => {
        service.getItems().subscribe((items: Item[]) => {
            expect(items).toEqual(mockData);
        });
        const request = httpTestingController.expectOne({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/photos'
        });
        request.flush(mockData);
    });

})
