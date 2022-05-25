import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, AfterViewInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  currentRoute: string = '';
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
  }

  toggleHmbMenu(): void {
    if (this.hmbMenu && this.hmbToggle) {
      this.hmbMenu.nativeElement.classList.toggle('active');
      this.hmbToggle.nativeElement.classList.toggle('hmb-toggle--active');
    }
  }

  ngAfterViewInit(): void {
    // const spheres = document.querySelector('.spheres-canvas') as HTMLElement;
    // spheres.style.position = 'absolute';
  }

  navigateTo(route: string) {
    if (route !== this.currentRoute) {
      if (this.hmbMenu?.nativeElement.classList.contains('active')) {
        this.toggleHmbMenu();
      }
      this.navigateEmmit.emit(route);
      setTimeout(() => {
        this.router.navigate([route]);
      }, 500);
    }
  }
}
