import { Pipe, PipeTransform } from '@angular/core';
import { Speaker } from '../../speakers/store/speakers';

@Pipe({
  name: 'customFilter',
})
export class CustomFilterPipe implements PipeTransform {
  transform(
    speakers: Array<Speaker>,
    nameSearch: string,
    emailSearch: string,
    idSearch: string
  ): Speaker[] {
    if (!nameSearch && !emailSearch && !idSearch) return speakers;
    nameSearch = nameSearch.toLocaleLowerCase();
    speakers = [
      ...speakers.filter(
        (speaker) =>
          speaker.name.first
            .toLocaleLowerCase()
            .indexOf(nameSearch.toLowerCase()) !== -1
      ),
    ];

    emailSearch = emailSearch.toLocaleLowerCase();
    speakers = [
      ...speakers.filter(
        (speaker) =>
          speaker.email
            .toLocaleLowerCase()
            .indexOf(emailSearch.toLowerCase()) !== -1
      ),
    ];

    idSearch = idSearch.toLocaleLowerCase();
    speakers = [
      ...speakers.filter(
        (speaker) =>
          speaker.id.name
            .toLocaleLowerCase()
            .indexOf(idSearch.toLowerCase()) !== -1
      ),
    ];

    return speakers;
  }
}
