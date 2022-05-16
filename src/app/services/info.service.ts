import { Tech } from '../interfaces/tech';
import { Work } from '../interfaces/work';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor() { }

  works: Work[] = [
    {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'Angular',
      description: 'Angular is a TypeScript-based open-source web application platform led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
      image: 'angular.png'
    },
    {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'React',
      description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
      image: 'react.png'
    },
    {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'Vue',
      description: 'Vue.js is a progressive framework for building user interfaces. It is maintained by a community of individual developers and companies. Vue can be used as a base in the development of single-page or mobile applications.',
      image: 'vue.png'
    },
    {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'Svelte',
      description: 'Svelte is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. Svelte can be used as a base in the development of single-page or mobile applications.',
      image: 'svelte.png'
    },
  ];

  techs: Tech[] = [
    {
      name: 'Angular',
      img: '../assets/img/angular.svg'
    },
    {
      name: 'Vuejs',
      img: '../assets/img/vuejs.svg'
    },
    {
      name: 'Java',
      img: '../assets/img/java.svg'
    },
    {
      name: 'Threejs',
      img: '../assets/img/threejs.svg'
    },
    {
      name: 'Firebase',
      img: '../assets/img/firebase.svg'
    },
    {
      name: 'Sass | Scss',
      img: '../assets/img/scss.svg'
    },
    {
      name: 'Mongodb',
      img: '../assets/img/mongodb.svg'
    },
    {
      name: 'Figma',
      img: '../assets/img/figma.svg'
    }
  ];

  getWorks(): Work[] {
    return this.works;
  }
  
  getTechs(): Tech[] {
    return this.techs;
  }
}
