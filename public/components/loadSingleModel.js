import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MathUtils, AnimationMixer } from 'three';

const radiansPerSecond = MathUtils.degToRad(30);

function modelToScene(data, hasNimation = false){
    
    const model = data.scene.children[0];
    if(hasNimation){
        console.log("has animation")
        const mixer = new AnimationMixer(model);
        const clip = data.animations[0];
        const action = mixer.clipAction(clip);
        action.play();
        model.tick = (delta) => {
            mixer.update(delta);
        };
    }
    return model;
}

async function loadSingleModel(path, hasNimation = false) {    
    const loader = new GLTFLoader();
    const [modelData] = await Promise.all([
        loader.loadAsync(path)
    ]);
    const model = modelToScene(modelData, hasNimation);
    return model

}

export { loadSingleModel }