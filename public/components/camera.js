import { PerspectiveCamera, Vector3 } from 'three';

export function createCamera() {
  const camera = new PerspectiveCamera(
    100, // fov = Field Of View
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // near clipping plane
    200, // far clipping plane
  );
  const moveCamera = (x,y,z) =>{
    camera.position.set(x,y,z)
  }
  const rotateCamera = (x,y,z) =>{
    console.log(x,y,z, camera.rotation);
  }
  // Move camera
  // const moveX = document.getElementById("camX");
  // const moveY = document.getElementById("camY");
  // const moveZ = document.getElementById("camZ");
  // const moveObjectButton = document.getElementById("moveCamera");
  // moveX.addEventListener("change", ()=> moveCamera(Number(moveX.value), Number(moveY.value), Number(moveZ.value)))
  // moveY.addEventListener("change", ()=> moveCamera(Number(moveX.value), Number(moveY.value), Number(moveZ.value)))
  // moveZ.addEventListener("change", ()=> moveCamera(Number(moveX.value), Number(moveY.value), Number(moveZ.value)))
  // moveObjectButton.onclick = ()=> moveCamera(Number(moveX.value), Number(moveY.value), Number(moveZ.value))
  // //Ratate camera
  // const rotX = document.getElementById("rotX");
  // const rotY = document.getElementById("rotY");
  // const rotZ = document.getElementById("rotZ");
  // rotX.addEventListener("change", ()=> rotateCamera(Number(rotX.value), Number(rotY.value), Number(rotZ.value)));
  // rotY.addEventListener("change", ()=> rotateCamera(Number(rotX.value), Number(rotY.value), Number(rotZ.value)));
  // rotZ.addEventListener("change", ()=> rotateCamera(Number(rotX.value), Number(rotY.value), Number(rotZ.value)));
  // const rotObjectButton = document.getElementById("rotCamera");
  // rotObjectButton.onclick = ()=> rotateCamera(Number(rotX.value), Number(rotY.value), Number(rotZ.value)); 

  // // Camera Look At
  // const lookAtX = document.getElementById("lookX");
  // const lookAtY = document.getElementById("lookY");
  // const lookAtZ = document.getElementById("lookZ");
  // const lookAtObjectButton = document.getElementById("lookAtCamera");
  // lookAtX.addEventListener("change", ()=> camera.lookAt(Number(lookAtX.value), Number(lookAtY.value), Number(lookAtZ.value)));
  // lookAtY.addEventListener("change", ()=> camera.lookAt(Number(lookAtX.value), Number(lookAtY.value), Number(lookAtZ.value)));
  // lookAtZ.addEventListener("change", ()=> camera.lookAt(Number(lookAtX.value), Number(lookAtY.value), Number(lookAtZ.value)));
  // lookAtObjectButton.onclick = ()=> {
  //   console.log(camera.quaternion)
  //   // camera.quaternion.rotateTowards();
  // } 
  // camera.lookAt(Number(lookAtX.value), Number(lookAtY.value), Number(lookAtZ.value));

  // Initial camera position
  camera.position.set(-10,3,-1);
  camera.rotation.set(-2,-1.3,-2);
  camera.lookAt(0.95, -0.29, 0.1);

  // Camera info
  const cameraInfo = document.getElementById("cameraInfo");
  const cameraRotInfo = document.getElementById("cameraRotationInfo");
  const cameraLookAtInfo = document.getElementById("cameraLookAtInfo");
  let cameraPosition, cameraRotation, cameraLookAt;
  camera.tick = (delta) => {
    
    // cameraPosition = `Camera position: X:${camera.position.x.toFixed(2)}, Y:${camera.position.y.toFixed(2)}, Z:${camera.position.z.toFixed(2)}`;
    // cameraInfo.innerHTML = `${cameraPosition}`;
    
    // cameraRotation = `Camera rotation: X:${camera.rotation.x.toFixed(2)}, Y:${camera.rotation.y.toFixed(2)}, Z:${camera.rotation.z.toFixed(2)}`;
    // cameraLookAt = camera.getWorldDirection(new Vector3())
    // cameraRotInfo.innerHTML = `${cameraRotation}`;
    // cameraLookAtInfo.innerHTML = `Camera look at: X:${cameraLookAt.x.toFixed(2)}, Y:${cameraLookAt.y.toFixed(2)}, Z:${cameraLookAt.z.toFixed(2)}`;    
  };  
  return camera;
}

