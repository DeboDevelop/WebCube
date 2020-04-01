import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r110/build/three.module.js';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r110/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, cube, controls;

function init()
{
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor("#e5e5e5");
    renderer.setSize( window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    controls = new OrbitControls( camera, renderer.domElement );

    camera.position.set( 0, 0, 400 );
    controls.update();

    let geometry = new THREE.BoxGeometry( 200, 200, 200 );
    let material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    window.addEventListener( 'resize', onWindowResize, false );
    
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

    requestAnimationFrame( animate );

    controls.update();

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );

}

init();
animate();
