import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// get the window size
const windowWidth = window.innerWidth;
console.log(windowWidth);

// get user agent navigator
let isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
if (isMobile == null) {
    isMobile = false;
}else{
    isMobile = true;
}
console.log(isMobile);

export default function styleTriggers(){
    const bluredContentDown = (elementToAnimate) => {
        gsap.to((elementToAnimate), {duration: 1, opacity: 1})
        gsap.to(elementToAnimate, {duration: 1, opacity: 0})
    };
    const bluredContentUp = (elementToAnimate) => {
        gsap.to((elementToAnimate), {duration: 1, opacity: 0})
        gsap.to(elementToAnimate, {duration: 1, opacity: 1})
    };
    const slideFromLeft = (elementToAnimate) => {
        gsap.to(elementToAnimate, {duration: 1, x: -100})
        gsap.to(elementToAnimate, {duration: 0.5, x: 0})
    };
    const slideToLeft = (elementToAnimate) => {
        gsap.to(elementToAnimate, {duration: 1, x: 0})
        gsap.to(elementToAnimate, {duration: 1, x: -100})
    };
    const tlMove9 = gsap.timeline({
        scrollTrigger: {
          trigger: "#profession",
          start: "top top +=100",
          end: "top bottom",
          scrub: true,
          pin: false,
          // markers: true,
          reverse: true,
          ease: "power1.inOut",
          onUpdate: self => {
            if (self.direction > 0) {
                bluredContentDown("#bluredContainer");
            }
            else{
                bluredContentUp("#bluredContainer");
            }
          }
        }
      });
  }
  