import { Component, OnInit } from '@angular/core';

import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { PerspectiveCamera } from 'three';
import * as three from 'three';

@Component({
  selector: 'app-nico-logo',
  templateUrl: './nico-logo.component.html',
  styleUrls: ['./nico-logo.component.scss']
})
export class NicoLogoComponent implements OnInit {
  cup$ = this.ngtGLTFLoader.load('assets/models/cup.glb');

  constructor(private ngtGLTFLoader: NgtGLTFLoaderService) { }
  hovered = false;

  ngOnInit(): void { }

  setInitialMain(controls: NgtSobaOrbitControls): void {
    const orbitControls = controls.controls;
    console.log(orbitControls);
    
    const camera = orbitControls.object as PerspectiveCamera;
    camera.zoom = 8;
    camera.position.setY(1.8);
    camera.position.setX(-10);
    // orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 1;
  }
}
