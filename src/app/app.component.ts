import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('overlayPrimary') overlayPrimary: ElementRef | undefined;
  @ViewChild('overlaySecondary') overlaySecondary: ElementRef | undefined;

  showOverlay = false;
  showLoader = true;

  constructor() { }

  ngOnInit(): void {
  }

  doneAnimations(): void {
    this.showLoader = false;
  }

  animateRoute() {
    this.overlayPrimary?.nativeElement.classList.remove('overlay--primary--active');
    this.overlaySecondary?.nativeElement.classList.remove('overlay--secondary--active');
    setTimeout(() => {
      this.overlayPrimary?.nativeElement.classList.add('overlay--primary--active');
      this.overlaySecondary?.nativeElement.classList.add('overlay--secondary--active');
    }, 0);
  }
}
