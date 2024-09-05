
const setSize = (container, camera, renderer) => {
  // 
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  console.log("setSize called");
};

const debounce = (container, camera, renderer, delay) => {
  console.log("debounce called")
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { 
      setSize(container, camera, renderer);
    }, delay);
  };
}

// check if device is mobile
const isMobile = () => {
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};


export class Resizer {
  constructor(container, camera, renderer) {
    // set initial size
    setSize(container, camera, renderer);
    
    this.debounceMethod = debounce(container, camera, renderer, 200);
    
    window.addEventListener("resize", (e) => {
      // this.setSize(container, camera, renderer)
      isMobile() ? null : this.onResize(container, camera, renderer);
      // this.debounceMethod();
    });
  }
  onResize(container, camera, renderer){
    setSize(container, camera, renderer);
  }
}
