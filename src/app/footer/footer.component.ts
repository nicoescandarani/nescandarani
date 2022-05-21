import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {
  @ViewChild('footerNav') footerNav: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const footerNav = document.getElementsByClassName('footer-nav')[0];
    const leftRef = document.getElementsByTagName('h1')[0];
    const leftPosition = this.getClientXValue(leftRef);
    this.positionFooterNav(leftPosition);
    window.addEventListener('resize', () => {
      const leftRef = document.getElementsByTagName('h1')[0];
      const leftPosition = this.getClientXValue(leftRef);
      this.positionFooterNav(leftPosition);
    });
  }

  getClientXValue(element: HTMLElement): number {
    return element.getBoundingClientRect().x;
  }

  positionFooterNav(positionRef: number): void {
    if (this.footerNav) {
      console.log(positionRef);
      
      this.footerNav.nativeElement.style.left = positionRef + 'px';
    }
  }

}
