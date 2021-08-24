function createContainerPalette() {
  const element = document.body;
  const containerColors = document.createElement('div');
  containerColors.id = 'color-palette';
  element.appendChild(containerColors);
}

createContainerPalette();

const numberColors = 4;
const colors = ['black', 'purple', 'blue', 'yellow'];
function createColorsPalette(number, arrayColors) {
  const element = document.querySelector('#color-palette');
  for (let index = 0; index < number; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    color.style.backgroundColor = arrayColors[index];
    element.appendChild(color);
  }
}

createColorsPalette(numberColors, colors);

function createButton() {
  const element = document.body;
  const button = document.createElement('button');
  button.innerText = 'Limpar';
  button.id = 'clear-board';
  element.appendChild(button);
}

createButton();

function createPixelFrame() {
  const element = document.body;
  const pixelFrame = document.createElement('div');
  pixelFrame.id = 'pixel-board';
  element.appendChild(pixelFrame);
}

createPixelFrame();

function createColumn() {
  const element = document.querySelector('#pixel-board');
  for (let column = 0; column < 5; column += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    element.appendChild(pixel);
  }
}

function createPixel() {
  for (let line = 0; line < 5; line += 1) {
    createColumn();
  }
}

createPixel();

document.querySelectorAll('.color')[0].classList.add('selected');

function selectColor() {
  const elements = document.querySelectorAll('.color');
  for (let index = 0; index < elements.length; index += 1) {
    elements[index].addEventListener('click',uniqueClassSelected);
    function uniqueClassSelected() {
      document.querySelector('.selected').classList.remove('selected');
      elements[index].classList.add('selected');
    }
  }
}

selectColor();

function toColor() {
  const elements = document.querySelectorAll('.pixel');
  for (let index = 0; index < elements.length; index += 1) {
    elements[index].addEventListener('click', colorize);
    function colorize() {
      elements[index].style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    }
  }
}

toColor();



function resetPixels() {
  const pixels = document.querySelectorAll('.pixel');
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', clearFrame);
  function clearFrame() {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  }
}

resetPixels();


