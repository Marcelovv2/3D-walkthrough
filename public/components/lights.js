
import { HemisphereLight, DirectionalLight, Color } from "three";
function createLights() {
    const ambientLight = new HemisphereLight(
      'white', // bright sky color
      '#f0fdff', // dim ground color
      2, // intensity
    );
    // ambientLight.groundColor = new Color("#778899")  
      
    const mainLight  = new DirectionalLight('#d7f3fe', 4);
    mainLight.position.set(10, 10, -6);
    const secondarylight = new DirectionalLight('white', 8);  


    mainLight.position.set(10,0, 0);
    secondarylight.position.set(-10,0,0);

    return { ambientLight, mainLight, secondarylight};
}

export { createLights };

