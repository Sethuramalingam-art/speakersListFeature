import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { invokeSpeakersAPI } from '../store/speakers.action';
import { selectSpeakers } from '../store/speakers.selector';
import { Speaker } from '../store/speakers';
import { appConstants } from '../../shared/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent implements OnInit {
  public id: string = '';
  public name: string = '';
  public email: string = '';
  public page: number = appConstants.PAGE_NUMBER;
  public count: number = appConstants.PAGE_COUNT;
  public tableSize: number = appConstants.TABLE_SIZE;
  public routeURL: string = appConstants.ROUTE_URL;
  public speakersList: Array<Speaker> = [];
  constructor(private store: Store, private router: Router) {}

  // Get updated state value from store selector
  readonly speakers$ = this.store.pipe(select(selectSpeakers));

  ngOnInit(): void {
    this.loadSpeakersList();
  }

  /**
   * This is the loadSpeakersList function for listing the speakers
   * @param meta speakers list so no params
   * @return no returns. Manipulate the speakers and generate speakerslist to list page
   */
  loadSpeakersList(): void {
    this.store.dispatch(invokeSpeakersAPI());
    this.speakers$.subscribe((speakers) => {
      speakers.map((speaker) => {
        this.speakersList.push(speaker);
      });
    });
  }

  /**
   * This is the onTableDataChange function from pagination of speakers lists
   * @param event which is number data type from selection of page
   * @return no returns. Execute the next page list
   */
  onTableDataChange(event: number): void {
    this.page = event;
  }

  /**
   * This is the onClickEvent function for navigating to details page based on speaker uuid
   * @param speaker object with Speaker data type
   * @return no returns. navigate to details page
   */
  onClickEvent(speaker: Speaker): void {
    this.router.navigate([this.routeURL + speaker.login.uuid]);
  }
}
