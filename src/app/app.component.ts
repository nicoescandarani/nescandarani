import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { slideInAnimation, slider } from './app-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit {
  showOverlay = false;

  @ViewChild('overlayPrimary') overlayPrimary: ElementRef | undefined;
  @ViewChild('overlaySecondary') overlaySecondary: ElementRef | undefined;

  constructor(private router: Router) { }

  hola() {
    this.overlayPrimary?.nativeElement.classList.remove('overlay--primary--active');
    this.overlaySecondary?.nativeElement.classList.remove('overlay--secondary--active');
    setTimeout(() => {
      this.overlayPrimary?.nativeElement.classList.add('overlay--primary--active');
      this.overlaySecondary?.nativeElement.classList.add('overlay--secondary--active');
    }, 0);
  }

  ngOnInit(): void {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationStart) {
    //     this.overlayPrimary?.nativeElement.classList.remove('overlay--primary--active');
    //     this.overlaySecondary?.nativeElement.classList.remove('overlay--secondary--active');
    //     setTimeout(() => {
    //       this.overlayPrimary?.nativeElement.classList.add('overlay--primary--active');
    //       this.overlaySecondary?.nativeElement.classList.add('overlay--secondary--active');
    //     }, 0);
    //   }
    //   // if (event instanceof NavigationEnd) {
    //     // this.overlayPrimary?.nativeElement.classList.remove('overlay--primary--active');
    //     // this.overlaySecondary?.nativeElement.classList.remove('overlay--secondary--active');
    //   //   console.log('NavigationEnd');
    //   //   console.log(this.overlayPrimary);
    //   // }
    // });
  }

  prepareRoute(outlet: any) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
