import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ImageService } from "app/image.service";
import { Image } from "app/image";
import { QuoteService } from 'app/quote.service';
import { Quote, Who } from "app/quote";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent implements OnInit {
  quotes: Quote[];
  images: Image[];
  currentQuote_: BehaviorSubject<Quote>;
  currentImage_: BehaviorSubject<Image>;
  public currentQuote: Observable<Quote>;
  public currentImage: Observable<Image>;
  private correct = 0;

  constructor(
    public router: Router,
    quotes: QuoteService,
    images: ImageService) {
    this.quotes = quotes.getRandom();
    // quotes will never be empty
    this.currentQuote_ = new BehaviorSubject<Quote>(this.quotes.pop()!);
    this.currentQuote = this.currentQuote_.asObservable();
    this.images = images.getRandom();
    // images will never be empty
    this.currentImage_ = new BehaviorSubject<Image>(this.images.pop()!);
    this.currentImage = this.currentImage_.asObservable();
  }

  ngOnInit() {
  }

  public pick(currentQuote: Quote, selection: Who) {
    if (selection == currentQuote.saidBy) {
      this.correct++;
    }
    else {
      // go to end
      this.router.navigate(["end", this.correct]);
    }

    const newQuote = this.quotes.pop();
    if (newQuote) {
      this.currentQuote_.next(newQuote);
      const newImage = this.images.pop();
      // safe because we have more images than quotes
      this.currentImage_.next(newImage!);
    }
    else {
      // go to end
      this.router.navigate(["end", this.correct]);
    }
  }

}
