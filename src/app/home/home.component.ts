import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import * as THREE from 'three';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  // @ViewChild('tilt') tilt: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // VanillaTilt.init(this.tilt?.nativeElement, {
    //   reverse: true,
    //   perspective: 2000,
    //   max: 7,
    //   gyroscope: true
    // });
  }
}
