import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentRoute: string = '';
  transparentisizeNav: boolean = false;
  currentScrollPosition: number = 0;
  currentUpScrollPosition: number = 0;
  hmbMenuActive: boolean = false;
  @Output() navigateEmmit = new EventEmitter<string>();
  @ViewChild('hmbMenu') hmbMenu: ElementRef | undefined;
  @ViewChild('hmbToggle') hmbToggle: ElementRef | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(this.currentRoute);
      }
    });
    window.addEventListener('scroll', () => {
      this.currentScrollPosition = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
      if (this.currentScrollPosition > 110 && !this.hmbMenuActive) {
        // ! scroll down.
        if (this.currentScrollPosition > this.currentUpScrollPosition) {
          this.transparentisizeNav = true;
        } else {
          this.transparentisizeNav = false;
        }
      }
      this.currentUpScrollPosition = this.currentScrollPosition;
    });
  }

  toggleHmbMenu(): void {
    if (this.hmbMenu && this.hmbToggle) {
      this.hmbMenuActive = !this.hmbMenuActive;
      this.transparentisizeNav = false;
    }
  }

  navigateTo(route: string) {
    if (route !== this.currentRoute) {
      if (this.hmbMenuActive) {
        this.toggleHmbMenu();
      }
      this.navigateEmmit.emit(route);
      setTimeout(() => {
        this.router.navigate([route]);
      }, 500);
    }
  }
}
