import { AnimationsService } from './../services/animations.service';
import { Work } from './../interfaces/work';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { InfoService } from '../services/info.service';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit, AfterViewInit {
  works: Work[] = [];
  mathRef: Math = Math;
  @ViewChildren('tilt') tilt: QueryList<ElementRef> | undefined;
  @ViewChildren('previewImg') previewImg: QueryList<ElementRef> | undefined;

  constructor(private infoService: InfoService, private animationsService: AnimationsService) { }

  ngOnInit(): void {
    this.works = this.infoService.getWorks();
  }

  ngAfterViewInit(): void {
    this.tilt?.forEach(item => {
      VanillaTilt.init(item.nativeElement, {
        reverse: true,
        glare: true,
        perspective: 4000,
        gyroscope: true
      });
    });
  }
}
