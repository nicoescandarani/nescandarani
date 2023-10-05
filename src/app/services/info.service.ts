import { Codepen } from './../interfaces/codepen';
import { Tech } from '../interfaces/tech';
import { Work } from '../interfaces/work';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  works: Work[] = [
    {
      url: 'https://nescanda.com/guessTheNumber/',
      title: 'Guess The Number Game',
      shortDescription: 'Simple guessing game',
      description: 'A simple game where the user has to guess a number between 1 and 100.',
      image: 'assets/img/GuessTheNumberGame.png',
    },
    {
      url: 'https://nicoescandarani.github.io/password-generator/',
      title: 'Password Generator',
      shortDescription: 'A password generator',
      description: 'It generates a random password with a given length and parameters.',
      image: 'assets/img/password-generator.png'
    },
    {
      url: 'https://eescandarani.com/',
      title: "Ezequiel Escandarani's portfolio",
      shortDescription: 'Profesional portfolio',
      description: 'Designer: Ezequiel Escandarani',
      image: 'assets/img/ezequiel-escandaranis-portfolio.png',
    },
    {
      url: 'https://nicoescandarani.github.io/this-is-a-mug/',
      title: 'This is a mug',
      shortDescription: 'Three.js mug project',
      description: 'Just an interactive 3D mug powered by three.js.',
      image: 'assets/img/this-is-a-mug.png',
    },
    {
      url: 'https://nescanda.com/kingdomFight/',
      title: 'Fight For Rywhndyr',
      shortDescription: 'RPG like game',
      description: 'Simple and fun RPG game.',
      image: 'assets/img/fightForRywndhyr.png',
    },
    {
      url: 'https://nescanda.com/piano/',
      title: 'Piano',
      shortDescription: 'Interactive piano',
      description: 'One octave piano fully made with JavaScript.',
      image: 'assets/img/Piano.png',
    },
    {
      url: 'https://nescanda.com/tictactoe/',
      title: 'Space Tic - Tac - Toe',
      shortDescription: 'Parallax Tic - Tac - Toe game',
      description: 'Simple and fun tic - tac - toe game with mouse parallax.',
      image: 'assets/img/Tictactoe.jpeg',
    }
  ];
  techs: Tech[] = [
    {
      name: 'Angular',
      img: 'assets/img/angular.svg'
    },
    {
      name: 'Vuejs',
      img: 'assets/img/vuejs.svg'
    },
    {
      name: 'Nodejs',
      img: 'assets/img/nodejs.svg'
    },
    {
      name: 'Java',
      img: 'assets/img/java.svg'
    },
    {
      name: 'Threejs',
      img: 'assets/img/threejs.svg'
    },
    {
      name: 'Firebase',
      img: 'assets/img/firebase.svg'
    },
    {
      name: 'Sass | Scss',
      img: 'assets/img/scss.svg'
    },
    {
      name: 'Mongodb',
      img: 'assets/img/mongodb.svg'
    },
    {
      name: 'Figma',
      img: 'assets/img/figma.svg'
    }
  ];
  codepens: Codepen[] = [
    {
      height: 300,
      title: 'Piano',
      src: 'https://codepen.io/nicoescandarani/embed/dyjPxZp?default-tab=result&theme-id=dark',
      href: 'https://codepen.io/nicoescandarani/pen/dyjPxZp'
    },
    {
      height: 300,
      title: '8bit Text Input',
      src: 'https://codepen.io/nicoescandarani/embed/NWBPQyz?default-tab=result&theme-id=dark',
      href: 'https://codepen.io/nicoescandarani/pen/NWBPQyz'
    },
    {
      height: 530,
      title: 'Navbar Links',
      src: 'https://codepen.io/nicoescandarani/embed/jOpEjqV?default-tab=result&theme-id=dark',
      href: 'https://codepen.io/nicoescandarani/pen/jOpEjqV'
    }
  ]

  getWorks(): Work[] {
    return this.works;
  }
  
  getTechs(): Tech[] {
    return this.techs;
  }

  getCodepens(): Codepen[] {
    return this.codepens;
  }
}
