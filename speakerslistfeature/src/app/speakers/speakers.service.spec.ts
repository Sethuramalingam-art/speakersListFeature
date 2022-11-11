import { TestBed } from '@angular/core/testing';
import {
  HttpClient,
  HttpClientModule,
  HttpErrorResponse,
} from '@angular/common/http';
import { SpeakersService } from './speakers.service';
import { Speakers } from './store/speakers';
import { of } from 'rxjs';

describe('SpeakersService', () => {
  let speakerServiceSpy: jasmine.SpyObj<SpeakersService>;
  let service: SpeakersService;
  let expectedSpeakers: Speakers = {
    results: [],
  };

  beforeEach(() => {
    const spy = jasmine.createSpyObj('SpeakersService', ['getAll']);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{ provide: SpeakersService, useValue: spy }],
    });

    speakerServiceSpy = TestBed.inject(
      SpeakersService
    ) as jasmine.SpyObj<SpeakersService>;

    expectedSpeakers = {
      results: [
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
  });

  it('should be created', () => {
    expect(speakerServiceSpy).toBeTruthy();
  });

  it('#getAllValue should return stubbed value from a spy', () => {
    speakerServiceSpy.getAll.and.returnValue(of(expectedSpeakers));
  });
});
