import { Component, OnInit } from '@angular/core';

import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { PerspectiveCamera } from 'three';

@Component({
  selector: 'app-spheres-canvas',
  templateUrl: './spheres-canvas.component.html',
  styleUrls: ['./spheres-canvas.component.scss']
})
export class SpheresCanvasComponent implements OnInit {
  sphere1$ = this.ngtGLTFLoader.load('assets/models/sphere1.glb');
  sphere2$ = this.ngtGLTFLoader.load('assets/models/sphere1.glb');
  sphere3$ = this.ngtGLTFLoader.load('assets/models/sphere1.glb');
  sphere4$ = this.ngtGLTFLoader.load('assets/models/sphere1.glb');
  sphere5$ = this.ngtGLTFLoader.load('assets/models/sphere1.glb');
  sphere6$ = this.ngtGLTFLoader.load('assets/models/sphere1.glb');
  sphere7$ = this.ngtGLTFLoader.load('assets/models/sphere1.glb');
  sphere8$ = this.ngtGLTFLoader.load('assets/models/sphere1.glb');


  sphere9$ = this.ngtGLTFLoader.load('assets/models/sphere2.glb');
  sphere10$ = this.ngtGLTFLoader.load('assets/models/sphere2.glb');
  sphere11$ = this.ngtGLTFLoader.load('assets/models/sphere2.glb');
  sphere12$ = this.ngtGLTFLoader.load('assets/models/sphere2.glb');
  sphere13$ = this.ngtGLTFLoader.load('assets/models/sphere2.glb');
  sphere14$ = this.ngtGLTFLoader.load('assets/models/sphere2.glb');
  sphere15$ = this.ngtGLTFLoader.load('assets/models/sphere2.glb');
  sphere16$ = this.ngtGLTFLoader.load('assets/models/sphere2.glb');

  constructor(private ngtGLTFLoader: NgtGLTFLoaderService) { }

  ngOnInit(): void {
  }

  setInitialShperes(controls: NgtSobaOrbitControls): void {
    const orbitControls = controls.controls;
    const camera = orbitControls.object as PerspectiveCamera;
    camera.zoom = 2.5;
    camera.position.setY(4);
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 0.5;
  }

}
