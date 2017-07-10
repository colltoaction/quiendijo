import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ImageService } from "./image.service";
import { QuoteService } from './quote.service';
import { GameComponent } from './game/game.component';
import { IntroComponent } from './intro/intro.component';
import { EndComponent } from './end/end.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent,
  },
  {
    path: 'play',
    component: GameComponent,
  },
  {
    path: 'end/:correct',
    component: EndComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    IntroComponent,
    EndComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    ImageService,
    QuoteService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
