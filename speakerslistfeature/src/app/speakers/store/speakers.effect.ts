import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { SpeakersService } from '../speakers.service';
import { speakersFetchAPISuccess, invokeSpeakersAPI } from './speakers.action';
import { selectSpeakers } from './speakers.selector';

@Injectable()
export class SpeakersEffect {
  constructor(
    private actions$: Actions,
    private speakersService: SpeakersService,
    private store: Store
  ) {}

  // Load speaker list to state value in the store
  loadAllSpeakers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeSpeakersAPI),
      withLatestFrom(this.store.pipe(select(selectSpeakers))),
      mergeMap(([, speakerformStore]) => {
        if (speakerformStore.length > 0) {
          return EMPTY;
        }
        return this.speakersService
          .getAll()
          .pipe(
            map((data) =>
              speakersFetchAPISuccess({ allSpeakers: data.results })
            )
          );
      })
    )
  );
}
