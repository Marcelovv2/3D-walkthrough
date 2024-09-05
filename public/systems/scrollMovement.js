import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function cameraMovements(camera){
    const firstMove = ()=> {
      console.log("firstMove")
        gsap.to(camera.position, {duration: 1, x: -10, y: 3, z: -1})
        gsap.to(camera.rotation, {duration: 1, x: -1.89, y: -1.26, z: -1.9})
        gsap.to("#introContainer", {duration: 0.33, opacity: 0});
    };

    const secondMove = ()=> {
      console.log("secondMove")
        gsap.to(camera.position, {duration: 1, x: 2.2, y: 3, z: 0});
        gsap.to("#introContainer", {duration: 1, opacity: 1});
        // gsap.to(camera.position, {duration: 1, x: -0.45, y: 3, z: 3.18})
        // gsap.to(camera.rotation, {duration: 1, x: -0.78, y: -0.10, z: -0.10})
        // controls.target.copy(nefertiti.position);
   };

    const thirdMove = ()=> {
      gsap.to(camera.position, {duration: 1, x: 3, y: 3, z: 3.18})
      gsap.to(camera.rotation, {duration: 1, x: 0.2, y: -3, z: 0})
      gsap.to("#imagesContainer1", {duration: 1, opacity: 0})
    };

    const fourthMove = ()=> {
      console.log("fourthMove")
      gsap.to(camera.position, {duration: 1, x: 1, y: 3, z: 10})
      gsap.to(camera.rotation, {duration: 1, x: 0, y: -4.75, z: 0})
      // Landing Pages
      gsap.to("#imagesContainer1", {duration: 0, opacity: 0})
      gsap.to("#imagesContainer1", {duration: 0.75, opacity: 1})
      // Responsive
      gsap.to("#imagesContainer2", {duration: 0.5, opacity: 0})
    };

    const fifthMove = ()=> {
      console.log("fifthMove")
      gsap.to(camera.position, {duration: 1, x: -6, y: 3, z: 10})
      gsap.to(camera.rotation, {duration: 1, x: 0, y: -4.75, z: 0})
      // Responsive
      gsap.to("#imagesContainer2", {duration: 0, opacity: 0})
      gsap.to("#imagesContainer2", {duration: 0.75, opacity: 1})
      // CMS
      gsap.to("#imagesContainer3", {duration: 0.5, opacity: 0})
    };

    const sixthMove = ()=> {
      console.log("sixthMove")
      gsap.to(camera.position, {duration: 1, x: -12, y: 3, z: 18})
      gsap.to(camera.rotation, {duration: 1, x: 0, y: -2.5, z: 0})
      // Responsive
      gsap.to("#imagesContainer2", {duration: 0.5, opacity: 0})
      // CMS
      gsap.to("#imagesContainer3", {duration: 0.5, opacity: 0})
      gsap.to("#imagesContainer3", {duration: 0.75, opacity: 1}) 
    };

    const seventhMove = ()=> {
      console.log("seventhMove")
      gsap.to(camera.position, {duration: 1, x: -1, y: 3, z: 19})
      gsap.to(camera.rotation, {duration: 1, x: 0, y: 0, z: 0})
      // CMS
      gsap.to("#imagesContainer3", {duration: 0.5, opacity: 0})
      // ToolBelt
      gsap.to("#toolBeltContainer", {duration: 0.5, opacity: 0})
      gsap.to("#toolBeltContainer", {duration: 0.75, opacity: 1})
    };

    const eighthMove = ()=> {
      console.log("eighthMove")
      gsap.to(camera.position, {duration: 1, x: -4, y: 3, z: 19})
      gsap.to(camera.rotation, {duration: 1, x: 0, y: -3.2, z: 0})
      // ToolBelt
      gsap.to("#toolBeltContainer", {duration: 0.5, opacity: 0})  
      // Contact
      gsap.to("#formContainer", {duration: 0.5, opacity: 0})
      gsap.to("#formContainer", {duration: 0.75, opacity: 1})

    };

    const ninthMove = ()=> {
      console.log("ninthMove")
      gsap.to(camera.position, {duration: 1, x: -4, y: 3, z: 20})
      gsap.to(camera.rotation, {duration: 1, x: 0, y: -3.1, z: 0})   
    };

    const tlMove1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#pos1",
        // endTrigger: "#pos1",
        start: "top top +=100",
        end: "top bottom",
        scrub: true,
        pin: false,
        // markers: true,
        // onEnter: firstMove,
        onUpdate: self => {
          if (self.direction > 0) {
            // secondMove();
          }
          else{
            firstMove();
          }
        }
      }
    });
    const tlMove2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#profession",
        start: "top top +=100",
        end: "top bottom",
        scrub: true,
        pin: false,
        // markers: true,
        onUpdate: self => {
          if (self.direction > 0) {
            secondMove();
          }
          else{
            // secondMove();
          }
        }
      }
    });
    const tlMove3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#pos3",
        start: "top top +=100",
        end: "top bottom",
        scrub: true,
        pin: false,
        // markers: true,
        onUpdate: self => {
          if (self.direction > 0) {
            thirdMove();
          }
          else{
            secondMove();
          }
        }
      }
    });
    const tlMove4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#pos4",
        start: "top top +=100",
        end: "top bottom",
        scrub: true,
        pin: false,
        // markers: true,
        onUpdate: self => {
          if (self.direction > 0) {
            fourthMove();
          }
          else{
            thirdMove();
          }
        }
      }
    });
    const tlMove5 = gsap.timeline({
      scrollTrigger: {
        trigger: "#pos5",
        start: "top top +=100",
        end: "top bottom",
        scrub: true,
        pin: false,
        // markers: true,
        onUpdate: self => {
          if (self.direction > 0) {
            fifthMove();
          }
          else{
            fourthMove();
          }
        }
      }
    });
    const tlMove6 = gsap.timeline({
      scrollTrigger: {
        trigger: "#pos6",
        start: "top top +=100",
        end: "top bottom",
        scrub: true,
        pin: false,
        // markers: true,
        onUpdate: self => {
          if (self.direction > 0) {
            sixthMove();
          }
          else{
            fifthMove();
          }
        }
      }
    });
    const tlMove7 = gsap.timeline({
      scrollTrigger: {
        trigger: "#pos7",
        start: "top top +=100",
        end: "top bottom",
        scrub: true,
        pin: false,
        // markers: true,
        onUpdate: self => {
          if (self.direction > 0) {
            seventhMove();
          }
          else{
            sixthMove();
          }
        }
      }
    });
    const tlMove8 = gsap.timeline({
      scrollTrigger: {
        trigger: "#pos8",
        start: "top top +=100",
        end: "top bottom",
        scrub: true,
        pin: false,
        // markers: true,
        onUpdate: self => {
          if (self.direction > 0) {
            eighthMove();
          }
          else{
            seventhMove();
          }
        }
      }
    });
    const tlMove9 = gsap.timeline({
      scrollTrigger: {
        trigger: "#pos9",
        start: "top top +=100",
        end: "top bottom",
        scrub: true,
        pin: false,
        // markers: true,
        onUpdate: self => {
          
          if (self.direction > 0) {
            ninthMove();
          }
          else{
            eighthMove();
          }
        }
      }
    });
}


