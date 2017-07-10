import { Injectable } from '@angular/core';
import { Quote, Person, Who } from "app/quote";

@Injectable()
export class QuoteService {
  private cris: Person = {
    name: "Cristina",
    quotes: [
      "Soy gata"
    ],
  };
  private gato: Person = {
    name: "Macri",
    quotes: [
      "Soy gato"
    ],
  };
  private quotes: Quote[] = [
    {
      saidBy: Who.left,
      left: this.cris,
      right: this.gato,
      quote: "Soy gata",
    },
  ];

  public getRandom(): Quote[] {
    // return this.quotes;
    return [
      ...this.cris.quotes.map(q => ({
        saidBy: Who.left,
        left: this.cris,
        right: this.gato,
        quote: q,
      })),
      ...this.gato.quotes.map(q => ({
        saidBy: Who.right,
        left: this.cris,
        right: this.gato,
        quote: q,
      }))
    ];
  }

}
