import * as THREE from 'three'
import { LoadGLTFByPath } from './Helpers/ModelHelper_mecha.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#mecha'),
  antialias: true,
});

const ambientLight = new THREE.AmbientLight(0xFFFFFF);
const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
ambientLight.intensity = 0.3;

renderer.setSize(500,500);
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
scene.add( directionalLight );
scene.add( ambientLight );
const camera = new THREE.PerspectiveCamera(60,1,0.1,1000);
camera.position.setX(3);
camera.position.setY(3);
camera.position.setZ(3);
const controls = new OrbitControls( camera, renderer.domElement);
animate();
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};