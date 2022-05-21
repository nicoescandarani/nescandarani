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
  hola = 2;
  
  constructor(private infoService: InfoService, private animationsService: AnimationsService) { }

  ngOnInit(): void {
    this.works = this.infoService.getWorks();
    console.log(this.mathRef);
    
  }

  ngAfterViewInit(): void {
    console.log(this.previewImg);
    this.tilt?.forEach(item => {
      VanillaTilt.init(item.nativeElement, {
        reverse: true,
        glare: true,
        perspective: 4000
      });
    });
    // (Array.from(document.querySelectorAll('preview-img')) as HTMLElement[]).forEach(img => {
    //   console.log(img);
    //   console.log(`${Math.random() * 2}s`);
      
    //   img.style.animationDelay = `${Math.random() * 2}s`;
    // });
    // window.addEventListener('mousemove', this.parallax.bind(this));
  }

  private parallax(e: any): void {
    // console.log(e);
    
    (Array.from(document.querySelectorAll('preview-img')) as HTMLElement[]).forEach(item => {
      console.log(e);
      const y = -(e.clientY - window.innerHeight / 2) / 20;
      const x = -(e.clientX - window.innerWidth / 2) / 20;
      item.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  }
}
