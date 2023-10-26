import * as THREE from 'three'
import { LoadGLTFByPath } from './Helpers/ModelHelper.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#bg'),
  antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadows = true;
renderer.shadowType = 1;
renderer.shadowMap.enabled = true;
renderer.setPixelRatio( window.devicePixelRatio );
renderer.toneMapping = 0;
renderer.toneMappingExposure = 1
renderer.useLegacyLights  = true;
renderer.toneMapping = THREE.NoToneMapping;
renderer.setClearColor(0xffffff, 0);
renderer.outputColorSpace = THREE.SRGBColorSpace 
const scene = new THREE.Scene();
LoadGLTFByPath(scene);
const camera = new THREE.PerspectiveCamera(60,window.innerHeight / window.innerWidth,0.1,1000);
camera.position.setX(1);
camera.position.setY(1);
camera.position.setZ(1);
const controls = new OrbitControls( camera, renderer.domElement);
animate();
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};