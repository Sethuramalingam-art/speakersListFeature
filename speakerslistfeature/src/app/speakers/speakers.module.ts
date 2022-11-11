import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxPaginationModule } from 'ngx-pagination';
import { SpeakersEffect } from './store/speakers.effect';
import { speakerReducer } from './store/speakers.reducer';
import { SpeakersRoutingModule } from './speakers-routing.module';
import { HomeComponent } from './home/home.component';
import { CustomFilterPipe } from '../shared/pipe/custom-filter.pipe';
import { DetailsComponent } from './details/details.component';
@NgModule({
  declarations: [HomeComponent, DetailsComponent, CustomFilterPipe],
  imports: [
    StoreModule.forFeature('speakersList', speakerReducer),
    EffectsModule.forFeature([SpeakersEffect]),
    CommonModule,
    FormsModule,
    SpeakersRoutingModule,
    NgxPaginationModule,
  ],
})
export class SpeakersModule {}
