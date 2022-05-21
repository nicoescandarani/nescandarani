import { AnimationsService } from '../services/animations.service';
import { InfoService } from '../services/info.service';
import { Tech } from './../interfaces/tech';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  techs: Tech[] = [];

  constructor(private infoService: InfoService, private animationsService: AnimationsService) { }

  ngOnInit(): void {
    this.techs = this.infoService.getTechs();
  }

  ngAfterViewInit(): void {
    // this.addAnimations();
  }

  // addAnimations(): void {
  //   const elements:HTMLElement[] = [];
  //   const PreElements = Array.from(document.querySelectorAll('.about__title, .about__about, .about__subtitle, .tech')) as HTMLElement[];
  //   elements.push(...PreElements);
  //   this.animationsService.createMultipleAnimations(elements, 'move-left-right', 0.5, 0, 0.1);
  // }
}
