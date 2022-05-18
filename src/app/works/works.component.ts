import { AnimationsService } from './../services/animations.service';
import { Work } from './../interfaces/work';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit, AfterViewInit {
  works: Work[] = [];

  constructor(private infoService: InfoService, private animationsService: AnimationsService) { }

  ngOnInit(): void {
    this.works = this.infoService.getWorks();
  }

  ngAfterViewInit(): void {
    this.addAnimations();
  }

  addAnimations(): void {
    const elements:HTMLElement[] = [];
    const PreElements = Array.from(document.querySelectorAll('.works__title, .work')) as HTMLElement[];
    elements.push(...PreElements);
    this.animationsService.createMultipleAnimations(elements, 'move-left-right', 0.5, 0, 0.1);
  }

}
