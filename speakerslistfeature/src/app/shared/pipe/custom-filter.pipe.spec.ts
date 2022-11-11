import { CustomFilterPipe } from './custom-filter.pipe';
import { Speaker } from '../../speakers/store/speakers';

describe('CustomFilterPipe', () => {
  let pipe: CustomFilterPipe;
  let speakerList: Array<Speaker> = [];
  beforeEach(() => {
    pipe = new CustomFilterPipe();

    speakerList = [
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
      {
        id: { name: 'CVI', value: '1787944526814 73' },
        name: { first: 'Sebine', last: 'Liuke' },
        phone: '05-89-62-76-68',
        email: 'Sebine.Liuke@example.com',
        gender: 'male',
        cell: '06-89-09-11-69',
        location: { city: 'Pia' },
        login: { uuid: 'f8775600-ef66-4292-9da8-d5827a00c56b' },
      },
    ];
  });

  it('create an instance', () => {
    const pipe = new CustomFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return filtered speaker list based on input search ', () => {
    const result = pipe.transform(speakerList, 'Cél', 'cel', 'INS');
    expect(result[0].email).toContain('celestin.louis@example.com');
  });
});
