import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  constructor() { }

  convertToHtmlArray(classes: string[]): HTMLElement[] {
    const elements: HTMLElement[] = [];
    classes.forEach(className => {
      const element = document.querySelector(`.${className}`) as HTMLElement;
      elements.push(element);
    });
    return elements;
  }

  createMultipleAnimations(elements: HTMLElement[], animationName: string, duration: number, delay: number, counterSteps: number): void {
    elements.forEach(element => {
      element.style.animationName = animationName;
      element.style.animationTimingFunction = 'ease-in-out';
      element.style.animationDuration = `${duration}s`;
      element.style.animationDelay = `${delay}s`;
      element.style.animationFillMode = 'forwards';
      delay += counterSteps;
    });
  }

  createMultipleAnimationsDelay(elements: HTMLElement[], delay: number, counterSteps: number): void {
    elements.forEach(element => {
      element.style.animationDelay = `${delay}s`;
      delay += counterSteps;
    });
  }
}
