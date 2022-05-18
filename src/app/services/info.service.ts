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
      url: 'https://nescanda.com/kingdomFight/',
      title: 'Fight For Rywhndyr',
      description: 'Simple and fun RPG game.',
      image: '../../assets/img/fightForRywndhyr.png',
    },
    {
      url: 'https://nescanda.com/guessTheNumber/',
      title: 'Guess The Number Game',
      description: 'Guess The Number Game.',
      image: '../../assets/img/GuessTheNumberGame.png',
    },
    {
      url: 'https://nescanda.com/piano/',
      title: 'Piano',
      description: 'One octave piano fully made with JavaScript.',
      image: '../../assets/img/Piano.png',
    },
    {
      url: 'https://nescanda.com/tictactoe/',
      title: 'Space Tic - Tac - Toe',
      description: 'Simple and fun tic - tac - toe game with mouse parallax.',
      image: '../../assets/img/Tictactoe.jpeg',
    },
    {
      url: 'https://www.nescanda.com/space/',
      title: 'Let´s Go To Space',
      description: 'Simple and fun interactive website with mouse parallax and animations. Try clicking the astronaut in the middle.',
      image: '../../assets/img/Space.png',
    }
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
      name: 'Nodejs',
      img: '../assets/img/nodejs.svg'
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
