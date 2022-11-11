import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersRoutingModule } from './speakers-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [CommonModule, SpeakersRoutingModule],
})
export class SpeakersModule {}
