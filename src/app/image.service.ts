import { Injectable } from '@angular/core';
import { Image } from "app/image";

@Injectable()
export class ImageService {

  constructor() { }

  public getRandom(): Image[] {
    return [
      {
        left: "assets/cris/1.jpg",
        right: "assets/gato/1.jpg"
      },
      {
        left: "assets/cris/2.jpg",
        right: "assets/gato/2.jpg"
      },
    ];
  }

}
