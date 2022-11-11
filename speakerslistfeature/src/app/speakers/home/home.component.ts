import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { invokeSpeakersAPI } from '../store/speakers.action';
import { selectSpeakers } from '../store/speakers.selector';
import { Speaker } from '../store/speakers';

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
  public page: number = 1;
  public count: number = 0;
  public tableSize: number = 10;
  public routeURL: string = '/details/';
  public speakersList: Array<Speaker> = [];
  constructor(private store: Store, private router: Router) {}

  readonly speakers$ = this.store.pipe(select(selectSpeakers));

  ngOnInit(): void {
    this.loadSpeakersList();
  }

  loadSpeakersList(): void {
    this.store.dispatch(invokeSpeakersAPI());
    this.speakers$.subscribe((speaker) => {
      speaker.map((d) => {
        this.speakersList.push(d);
      });
    });
  }

  onTableDataChange(event: number): void {
    this.page = event;
  }

  onClickEvent(speaker: Speaker): void {
    this.router.navigate([this.routeURL + speaker.login.uuid]);
  }
}
