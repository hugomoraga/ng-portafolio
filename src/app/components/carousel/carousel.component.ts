import { Component, OnInit } from '@angular/core';
import { WorksService, Work } from '../../services/works.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  // images = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `../../../assets/slider-${n}.png`);

  works: Work[] = [];

  constructor( private workService: WorksService ) {


  }

  ngOnInit() {
    function carousel(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    }

    this.works = this.workService.getWorks();
    console.log(this.works);

  }

}


