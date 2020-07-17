import { Component, OnInit, Input } from '@angular/core';
import {MnFullpageOptions} from 'ngx-fullpage';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() public options: MnFullpageOptions = MnFullpageOptions.create({
    controlArrows: true,
    scrollingSpeed: 1000,
    css3: true,

  });

  constructor() { }

  ngOnInit() {
  }

}
