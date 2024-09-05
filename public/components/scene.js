import { SRGBColorSpace, Scene, TextureLoader } from 'three';


const loader = new TextureLoader();

function createScene() {
  const scene = new Scene();
  const bgTexture = loader.load('../assets/images/pexels-freestocksorg-412462.jpg');
  bgTexture.colorSpace = SRGBColorSpace;
  scene.background = bgTexture;
  return scene;
}

export { createScene };