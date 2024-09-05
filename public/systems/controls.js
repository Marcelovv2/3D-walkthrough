// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
 
function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);
 
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.zoomToCursor = true;
    // controls.enableRotate = false;
    // controls.minPolarAngle = Math.PI/2;
    // controls.maxPolarAngle = Math.PI/2;
    // controls.maxPolarAngle = 1.7;
    // controls.maxAzimuthAngle = Math.PI/2;
    controls.enablePan = false;

    controls.tick = () => {
        controls.update();
    };
    return controls;
}

export { createControls };

