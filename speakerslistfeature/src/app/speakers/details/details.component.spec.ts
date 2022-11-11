import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailsComponent } from './details.component';
import { SpeakersEffect } from '../store/speakers.effect';
import { speakerReducer } from '../store/speakers.reducer';
import { Speaker } from '../store/speakers';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let store: MockStore<Speaker>;
  const initialState = {
    speakers: [
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
      declarations: [DetailsComponent],
      providers: [provideMockStore({ initialState })],
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        RouterTestingModule,
        HttpClientModule,
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    component.speakerDetailList = [
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
    expect(compiled.querySelector('#div_fullName')?.textContent).toContain(
      'Célestin'
    );
  });
});
