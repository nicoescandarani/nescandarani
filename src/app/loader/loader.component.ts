import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, AfterViewInit {
  @Output() doneAnimations = new EventEmitter<boolean>();

  @ViewChild ('wrapper') wrapper: ElementRef | undefined;
  @ViewChild ('firstLoader') firstLoader: ElementRef | undefined;
  @ViewChild ('first') first: ElementRef | undefined;
  @ViewChild ('firstTable') firstTable: ElementRef | undefined;
  @ViewChild ('second') second: ElementRef | undefined;
  @ViewChild ('secondLoader') secondLoader: ElementRef | undefined;
  @ViewChild ('third') third: ElementRef | undefined;
  @ViewChild ('fourth') fourth: ElementRef | undefined;
  @ViewChild ('secondTable') secondTable: ElementRef | undefined;
  @ViewChild ('fifth') fifth: ElementRef | undefined;
  @ViewChild ('sixth') sixth: ElementRef | undefined;

  phase: string = 'setup';

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initAnimations();
  }

  initAnimations(): void {
    setTimeout(() => {
      this.firstLoader?.nativeElement.classList.add('show--flex');
      this.scrollToBottom();
    }, 500);
    setTimeout(() => {
      this.phase = 'building';
    }, 1100);
    setTimeout(() => {
      this.phase = 'sealing';
    }, 1600);
    setTimeout(() => {
      this.firstLoader?.nativeElement.classList.remove('show--flex');
      this.first?.nativeElement.classList.add('show');
      this.scrollToBottom();
    }, 2000);
    setTimeout(() => {
      this.firstTable?.nativeElement.classList.add('show');
      this.second?.nativeElement.classList.add('show');
      this.scrollToBottom();
    }, 2200);
    setTimeout(() => {
      this.third?.nativeElement.classList.add('show');
      this.scrollToBottom();
    }, 2500);
    setTimeout(() => {
      this.secondLoader?.nativeElement.classList.add('show--flex');
      this.scrollToBottom();
      this.phase = 'setup';
    }, 3000);
    setTimeout(() => {
      this.phase = 'building';
    }, 3400);
    setTimeout(() => {
      this.phase = 'sealing';
    }, 3700);
    setTimeout(() => {
      this.secondLoader?.nativeElement.classList.remove('show--flex');
      this.fourth?.nativeElement.classList.add('show');
      this.scrollToBottom();
    }, 4000);
    setTimeout(() => {
      this.secondTable?.nativeElement.classList.add('show');
      this.scrollToBottom();
    }, 4200);
    setTimeout(() => {
      this.fifth?.nativeElement.classList.add('show');
      this.scrollToBottom();
    }, 4500);
    setTimeout(() => {
      this.sixth?.nativeElement.classList.add('show');
      this.scrollToBottom();
    }, 5000);
    // setTimeout(() => {
    //   this.doneAnimations.emit(true);
    // }, 6000);
  }

  scrollToBottom(): void {
    this.wrapper?.nativeElement.scrollTo({
      top: this.wrapper?.nativeElement.clientHeight
    });
  }
}
