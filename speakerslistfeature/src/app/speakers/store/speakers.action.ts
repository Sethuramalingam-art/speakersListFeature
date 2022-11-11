import { createAction, props } from '@ngrx/store';
import { Speaker } from './speakers';

export const invokeSpeakersAPI = createAction(
  '[Speakers API] Invoke Speakers Fetch API'
);

export const speakersFetchAPISuccess = createAction(
  '[Speakers API] Fetch API Success',
  props<{ allSpeakers: Speaker[] }>()
);
