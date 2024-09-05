import { 
    Color, AxesHelper, BoxHelper,      
    ArrowHelper, Vector2, Vector3, 
    Plane,PlaneHelper, GridHelper,
    DirectionalLightHelper, HemisphereLightHelper
} from 'three';
import { createCamera } from '../components/camera.js';
import { createScene } from '../components/scene.js';
import { Resizer } from '../systems/Resizer.js';
import { createRenderer } from '../systems/renderer.js';
import { createLights } from '../components/lights.js';
import { Loop } from '../systems/Loop.js';
import { createControls } from '../systems/controls.js';
import { loadSingleModel } from '../components/loadSingleModel.js';
import GUI from 'lil-gui'; 
import cameraMovements from '../systems/scrollMovement.js';
import { createStats } from '../systems/Stats.js';
import styleTriggers from '../systems/contentStyles.js';
import {loadingScreen} from '../components/loadingScreen.js';
const axesHelper = new AxesHelper( 5 );
const colorRed = new Color(0xff0000);
const colorMagenta = new Color("magenta");
const colorBlue = new Color(0x0000ff);

// Hack to create "private methods" by module scope.
let camera, scene, renderer, loop, controls, stats;
export class World{
    constructor(container){
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);
        
        // Light
        const { ambientLight, mainLight, secondarylight } = createLights();

        const resizer = new Resizer(container, camera, renderer)

        loop.updatables.push(camera)      
           
        scene.add(ambientLight, mainLight, secondarylight);
        scene.add(camera)
        
        controls = createControls(camera, container);
        styleTriggers();

        loadingScreen("loading");
    }
    async init(){
        const artGallery = await loadSingleModel("../assets/models/room_art/scene.gltf");   
        scene.add(artGallery);
        artGallery.position.set(25,0,15);
        artGallery.scale.set(0.05, 0.05, 0.05)
        scene.add(artGallery);

        // const davinciFlyingMachine = await loadSingleModel("../assets/models/da_vinci_flying_machine/scene.gltf", true);
        // davinciFlyingMachine.position.set(5.6,2.5,-2.8);
        // davinciFlyingMachine.scale.set(2,2,2);
        // scene.add(davinciFlyingMachine);
        // loop.updatables.push(davinciFlyingMachine);

        const nefertiti = await loadSingleModel("../assets/models/nefertitis_bust_like_in_the_museum/scene.gltf");
        nefertiti.position.set(7,2.2,0.2);
        nefertiti.scale.set(3,3,3);

        const romanArmon = await loadSingleModel("../assets/models/roman_officer_armour/scene.gltf");
        romanArmon.position.set(5.5,2.2,3.2);
        romanArmon.scale.set(0.02, 0.02, 0.02);
        romanArmon.rotation.set(-1.55, 0, -1.5);
        scene.add(romanArmon);
        
        
        const pillar1 = await loadSingleModel("../assets/models/pillar_stone/scene.gltf");
        pillar1.position.set(5.5,0.2,3);
        pillar1.scale.set(0.18, 0.18, 0.18);

        const pillar2 = pillar1.clone();
        pillar2.position.set(5.5,0.2,0);

        // const pillar3 = pillar1.clone();
        // pillar3.position.set(5.5,0.2,-3);
        scene.add(pillar1, pillar2);
   
        const calendar = await loadSingleModel("../assets/models/aztec_calendar_stone/scene.gltf");
        calendar.position.set(6.3, 2.2, 10);
        calendar.rotation.set(0,-1.55,0);
        scene.add(calendar);

        // const spartanHelmet = await loadSingleModel("../assets/models/pbr_hoplite_helmet/scene.gltf");
        // spartanHelmet.position.set(-0.5,2.7,14.5);
        // spartanHelmet.rotation.set(-1.5,0,3);
        // spartanHelmet.scale.set(2,2,2);

        // const medievalHelmet = await loadSingleModel("../assets/models/helmet/scene.gltf");
        // medievalHelmet.position.set(-5.3,2.8,5.6);
        // medievalHelmet.scale.set(0.23,0.23,0.23);

        
        scene.add(pillar1, pillar2,calendar, nefertiti);
        loadingScreen("loaded");
        cameraMovements(camera, controls, pillar1, pillar2,calendar, nefertiti);
    }
    render(){
        renderer.render(scene, camera);
    }

    start(){
        loop.start();
    }
    stop() {
        loop.stop();
    }
}


