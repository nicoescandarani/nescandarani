import { AnimationsService } from '../services/animations.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private animationsService: AnimationsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.addAnimations();
  }

  addAnimations(): void {
    const elements:HTMLElement[] = [];
    const PreElements = Array.from(document.querySelectorAll('.home__title, .home__subtitle, .home__download')) as HTMLElement[];
    elements.push(...PreElements);
    this.animationsService.createMultipleAnimations(elements, 'move-left-right', 0.5, 0, 0.1);
  }
}
