import { createFeatureSelector } from '@ngrx/store';
import { Speaker } from './speakers';

export const selectSpeakers = createFeatureSelector<Speaker[]>('speakersList');
