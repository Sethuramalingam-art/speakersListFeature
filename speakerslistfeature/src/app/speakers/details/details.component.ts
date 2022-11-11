import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { selectSpeakers } from '../store/speakers.selector';
import { Speaker } from '../store/speakers';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class DetailsComponent implements OnInit {
  // Get updated state value from store selector
  readonly speakers$ = this.store.pipe(select(selectSpeakers));

  public speakerDetailList: Array<Speaker> = [];
  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.speakers$.subscribe((speaker) => {
      this.speakerDetailList = speaker.filter(
        (data) =>
          data.login.uuid == this.activatedRoute.snapshot.paramMap.get('id')
      );
    });
  }
}
