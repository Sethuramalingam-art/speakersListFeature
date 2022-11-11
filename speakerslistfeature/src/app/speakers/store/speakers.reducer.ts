import { createReducer, on } from '@ngrx/store';
import { Speaker, Speakers } from '../store/speakers';
import { speakersFetchAPISuccess } from './speakers.action';

export const initialState: ReadonlyArray<Speaker> = [];

export const speakerReducer = createReducer(
  initialState,
  on(speakersFetchAPISuccess, (state, { allSpeakers }) => {
    return allSpeakers;
  })
);
