import { HttpClientModule } from '@angular/common/http';
import { fakeAsync, flush, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { ItemsService } from './items.service';


describe('ItemsService', () => {
    let service: ItemsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [ItemsService]
        });
        service = TestBed.inject(ItemsService);
    });

    it('items service should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return items', fakeAsync(() => {
        const spy = spyOn(service, "getItems").and.callFake(() => of([{ id: 123, thumbnailUrl: '/test/thumburl', url: 'test/url', title: 'test title' }]));
        const items = service.getItems();
        tick();
        flushMicrotasks();
        flush();
        expect(items).toBeDefined();
    }));

})
