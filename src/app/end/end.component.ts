import { Observable } from "rxjs/Observable";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {
  public correct: Observable<number>;

  constructor(
    private route: ActivatedRoute) {
    this.correct = this.route.params.map(params => Number.parseInt(params['correct'])!);
  }

  ngOnInit() {
  }

}
