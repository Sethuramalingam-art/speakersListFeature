import * as fromSelectors from './speakers.selector';
import { Speaker } from './speakers';

describe('SpeakersSelector', () => {
  it('should select the list of speakers', () => {
    const initialState: Array<Speaker> = [
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
    const result = fromSelectors.selectSpeakers.projector(initialState);
    expect(result.length).toEqual(1);
    expect(result[0].id.name).toEqual('INSEE');
  });
});
