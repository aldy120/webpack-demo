import _ from 'lodash';
import './style.css';
import Image400200 from './pic400200.jpeg';

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myImage = new Image();
  myImage.src = Image400200;
  element.appendChild(myImage);

  return element;
}

document.body.appendChild(component());