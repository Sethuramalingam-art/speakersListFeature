import * as fromReducer from './speakers.reducer';
import { Speaker } from '../store/speakers';
import { speakersFetchAPISuccess } from './speakers.action';

describe('SpeakersReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.speakerReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('speakersFetchAPISuccess action', () => {
    it('should update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: Array<Speaker> = [
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
      const action = speakersFetchAPISuccess({ allSpeakers: newState });
      const state = fromReducer.speakerReducer(initialState, action);

      expect(state).toEqual(newState);
    });
  });
});
