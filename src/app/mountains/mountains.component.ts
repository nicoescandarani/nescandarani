import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-mountains',
  templateUrl: './mountains.component.html',
  styleUrls: ['./mountains.component.scss']
})
export class MountainsComponent implements OnInit, AfterViewInit {
  @ViewChild('wrapper') wrapper: ElementRef  | undefined;
  @ViewChild('canvas') canvas: ElementRef  | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initScene();
  }

  initScene(): void {
    // ! Texture loader
    const loader = new THREE.TextureLoader();
    const height = loader.load('assets/models/height.png');
    const alpha = loader.load('assets/models/alpha.jpg');

    // ! Scene
    const scene = new THREE.Scene();
    
    // ! Objects
    const geometry = new THREE.PlaneBufferGeometry(3, 3, 64, 64);
    
    // ! Materials
    const material = new THREE.MeshStandardMaterial({
      color: '#69dbff',
      wireframe: true,
      displacementMap: height,
      displacementScale: 0.6,
      alphaMap: alpha,
      transparent: true
    });
    
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
    plane.rotation.x = 181;

    // ! Lights
    const pointLight = new THREE.PointLight('#ff52ff', 2);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 3;
    scene.add(pointLight);

    // ! Sizes.
    const sizes = {
      width: this.wrapper?.nativeElement.clientWidth,
      height: this.wrapper?.nativeElement.clientHeight
    }
    
    window.addEventListener('resize', () => {
      // ! Update sizes
      sizes.width = this.wrapper?.nativeElement.clientWidth;
      sizes.height = this.wrapper?.nativeElement.clientHeight;
    
      // ! Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
    
      // ! Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // ! Camera.
    // ! Base camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;
    scene.add(camera);

    // ! Controls
    const controls = this.canvas ? new OrbitControls(camera, (this.canvas?.nativeElement) as HTMLElement) : undefined;
    if (controls) controls.enableDamping = true;
    if (controls) controls.enablePan = false;

    // ! Renderer.
    const renderer = new THREE.WebGLRenderer({
        canvas: this.canvas?.nativeElement,
        alpha: true
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // ! Animate.
    document.addEventListener('mousemove', animateTerrain);

    let mouseY = 0;

    function animateTerrain(e: any) {
        mouseY = e.clientY;
    }

    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // ! Update Objects
      plane.rotation.z = 0.1 * elapsedTime;
      plane.material.displacementScale = 0.3 + mouseY * 0.0005;

      if (window.innerWidth < 768) {
        plane.material.displacementScale = 0.5;
      }

      // ! Update Orbital Controls
      if (controls) controls.update();

      // ! Render
      renderer.render(scene, camera);

      // ! Call tick again on the next frame
      window.requestAnimationFrame(tick);
    }

    tick();
  }
}
