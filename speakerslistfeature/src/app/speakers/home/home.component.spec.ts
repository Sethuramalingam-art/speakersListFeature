import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { Speaker } from '../store/speakers';
import { invokeSpeakersAPI } from '../store/speakers.action';
import { Store, StoreModule } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home.component';
import { CustomFilterPipe } from '../../shared/pipe/custom-filter.pipe';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore<Speaker>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  const initialState = {
    speakersList: [
      {
        id: { name: 'INSEE', value: '1780644526814 73' },
        name: { first: 'Célestin', last: 'Louis' },
        phone: '05-89-62-76-68',
        email: 'celestin.louis@example.com',
        gender: 'male',
        cell: '06-89-02-11-49',
        location: { city: 'Pau' },
        login: { uuid: 'f8774600-ef66-4292-9da8-d5827a00c56b' },
      },
    ],
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, CustomFilterPipe],
      providers: [
        provideMockStore({ initialState }),
        { provide: Router, useValue: routerSpy },
      ],
      imports: [StoreModule.forRoot({}), NgxPaginationModule],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.speakersList = [
      {
        id: { name: 'INSEE', value: '1780644526814 73' },
        name: { first: 'Célestin', last: 'Louis' },
        phone: '05-89-62-76-68',
        email: 'celestin.louis@example.com',
        gender: 'male',
        cell: '06-89-02-11-49',
        location: { city: 'Pau' },
        login: { uuid: 'f8774600-ef66-4292-9da8-d5827a00c56b' },
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.text-center')?.textContent).toContain(
      'Speakers Details List'
    );
  });

  it('invokeSpeakersAPI should not dispatch action when component not loaded', () => {
    const storeSpy = spyOn(store, 'dispatch').and.callThrough();
    expect(storeSpy).toHaveBeenCalledTimes(0);
  });

  it('speakerlist data loaded in table', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#th_speakerId')?.textContent).toContain(
      'INSEE'
    );
  });

  it(`should navigate to details when speaker list loaded`, () => {
    component.onClickEvent(initialState.speakersList[0]);
    expect(routerSpy.navigate).toHaveBeenCalledWith([
      '/details/f8774600-ef66-4292-9da8-d5827a00c56b',
    ]);
  });

  it(`should select the page number`, () => {
    component.onTableDataChange(2);
    expect(component.page).toEqual(2);
  });
});
