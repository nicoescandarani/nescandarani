import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import * as THREE from 'three';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  _startAnimating: boolean = false;

  @Input()
  set startAnimating(value: boolean) {
    this._startAnimating = value;
  }

  get startAnimating(): boolean {
    return this._startAnimating;
  }

  constructor() { }

  ngOnInit(): void { }
}
