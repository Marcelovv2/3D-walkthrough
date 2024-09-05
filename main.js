
import { World } from "/public/world/World.js";
import { contactFormSubmit } from "./public/components/contact";
async function main(){
  // Get a reference to the container element
  const container = document.querySelector('#mainContainer');

  // create a new world
  const world = new World(container);

  // complete async tasks
  await world.init();

  // start the animation loop
  world.start();

  // handle contact form submission
  contactFormSubmit();
}

main().catch((err) => {
  console.error(err);
});