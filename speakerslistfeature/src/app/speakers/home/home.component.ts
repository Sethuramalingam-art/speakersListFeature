import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { invokeSpeakersAPI } from '../store/speakers.action';
import { selectSpeakers } from '../store/speakers.selector';
import { Speaker } from '../store/speakers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
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
}
