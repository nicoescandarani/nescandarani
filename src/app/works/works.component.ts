import { Codepen } from './../interfaces/codepen';
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
  codepensArray: Codepen[] = [];
  mathRef: Math = Math;
  selectedTemplate: string = 'projects';
  loadedCodePens: number[] = [];

  @ViewChildren('tilt') tilt: QueryList<ElementRef> | undefined;
  @ViewChildren('previewImg') previewImg: QueryList<ElementRef> | undefined;

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.works = this.infoService.getWorks();
    this.codepensArray = this.infoService.getCodepens();
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

  selectTab(tab: string): void {
    this.selectedTemplate = tab;
    this.loadedCodePens = [];
  }

  showHideLoader(index: number): void {
    if (index > -1) {
      this.loadedCodePens.push(index);
    }
  }
}
