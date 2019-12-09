import { Component, OnInit } from '@angular/core';
import { NavServiceService } from '../nav-service.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(public navService: NavServiceService) { }

  ngOnInit() {
  }

}
