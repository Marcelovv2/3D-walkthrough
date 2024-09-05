import gsap from 'gsap';
export const cameraMovements = (camera, controls, pillar1, pillar2, pillar3,calendar, spartanHelmet, medievalHelmet) =>{
    const firstMove = document.getElementById("firstMove");
    firstMove.onclick = ()=> {
        // gsap.to(camera.position, {duration: 1, x: -10, y: 3, z: -1})
        // gsap.to(camera.rotation, {duration: 1, x: -1.89, y: -1.26, z: -1.9})
        // gsap.to(camera.lookAt, {duration: 1, x: 0.95, y: -0.29, z: 0.1})
        camera.position.copy(pillar1.position);
        
    }
    const secondMove = document.getElementById("secondMove");
    secondMove.onclick = ()=> {
        gsap.to(camera.position, {duration: 1, x: -0.45, y: 3, z: 3.18})
        gsap.to(camera.rotation, {duration: 1, x: -0.78, y: -0.10, z: -0.10})
        gsap.to(camera.lookAt, {duration: 1, x: 0.1, y: -0.7, z: -0.7})
        controls.target.copy(nefertiti.position);
    }
    const thirdMove = document.getElementById("thirdMove");
    thirdMove.onclick = ()=> {
        gsap.to(camera.position, {duration: 1, x: 3, y: 3, z: 3.18})
        gsap.to(camera.rotation, {duration: 1, x: 0.2, y: -3, z: 0})
        gsap.to(camera.lookAt, {duration: 1, x: 0.14, y: -0.2, z: 1})
    }
    const fourthMove = document.getElementById("fourthMove");
    fourthMove.onclick = ()=> {
    gsap.to(camera.position, {duration: 1, x: 1, y: 3, z: 10})
    gsap.to(camera.rotation, {duration: 1, x: 0, y: -4.75, z: 0})
    gsap.to(camera.lookAt, {duration: 1, x: -1, y: 0, z: -0.5})
    }
    const fifthMove = document.getElementById("fifthMove");
    fifthMove.onclick = ()=> {
        gsap.to(camera.position, {duration: 1, x: -6, y: 3, z: 10})
        gsap.to(camera.rotation, {duration: 1, x: 0, y: -4.75, z: 0})
        gsap.to(camera.lookAt, {duration: 1, x: -14, y: 2, z: 10})
        
    }
    const sixthMove = document.getElementById("sixthMove");
    sixthMove.onclick = ()=> {
        gsap.to(camera.position, {duration: 1, x: -12, y: 3, z: 18})
        gsap.to(camera.rotation, {duration: 1, x: 0, y: -2.5, z: 0})
        // gsap.to(camera.lookAt, {duration: 1, x: -14, y: 2, z: 10})
        
    }
    const seventhMove = document.getElementById("seventhMove");
    seventhMove.onclick = ()=> {
        gsap.to(camera.position, {duration: 1, x: -1, y: 3, z: 19})
        gsap.to(camera.rotation, {duration: 1, x: 0, y: 0, z: 0})

        // gsap.to(camera.lookAt, {duration: 1, x: -14, y: 2, z: 10})
        
    }
    const eighthMove = document.getElementById("eighthMove");
    eighthMove.onclick = ()=> {
        gsap.to(camera.position, {duration: 1, x: -4, y: 3, z: 19})
        gsap.to(camera.rotation, {duration: 1, x: 0, y: -3.2, z: 0})
        // gsap.to(camera.lookAt, {duration: 1, x: -14, y: 2, z: 10})
        
        
    }
    const ninthMove = document.getElementById("ninthMove");
    ninthMove.onclick = ()=> {
        gsap.to(camera.position, {duration: 1, x: -4, y: 3, z: 20})
        gsap.to(camera.rotation, {duration: 1, x: 0, y: -3.1, z: 0})
        // gsap.to(camera.lookAt, {duration: 1, x: -14, y: 2, z: 10})
        
    }
}