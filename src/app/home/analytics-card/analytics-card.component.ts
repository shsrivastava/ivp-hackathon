import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-analytics-card',
  templateUrl: './analytics-card.component.html',
  styleUrls: ['./analytics-card.component.scss']
})
export class AnalyticsCardComponent implements OnInit {
  @Input()
  public body: string = ""

  constructor() { }

  ngOnInit() {
  }

}
