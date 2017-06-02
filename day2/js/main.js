// let scene = document.querySelector('a-scene');
//
// function create3DObject(){
//
//   let element = document.createElement('a-entity');
//
//   element.setAttribute('geometry', 'primitive: sphere; radius: 1.5');
//   element.setAttribute('material', `color:#${getRandomColor()}; metalness: 0; roughness: 0`);
//
//   scene.appendChild(element);
//
// }
//
// create3DObject();

let scene = document.querySelector("a-scene");

let objectCount = 10;
let elementRadius = 1.5;
let elementSpacing = 1.5;

let size = (elementRadius * 2) + elementSpacing;
let totalSize = objectCount * size;

function getRandomColor() {
  // There are 16^6 possible hex colors (16777216)
  return "#" + Math.floor(Math.random() * 16777216).toString(16);
}

function create3DObject(x, y, z) {
  let el = document.createElement("a-entity");
  el.setAttribute("geometry", "primitive: sphere; radius: 1.5");
  el.setAttribute("material", `color:#${ getRandomColor() }; metalness: 0; roughness: 0;`);
  el.setAttribute("position", `${x} ${y} ${z}`);
  scene.append(el);
}

function addObjects() {
  for(let i = 0; i <= objectCount; i++) {
    create3DObject( ( i * size ), 0, -5);
  }
}

addObjects();

// get random hex color
function getRandomColor() {

  let letters = '0123456789abcdef';

  let randomColor = '';

  for (let i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }

  return randomColor;

}
