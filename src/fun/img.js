import nodeImg from '../assets/img/nodejs.png';

console.log('nodeImgUrl: ', nodeImg);

const imgEle = document.createElement('img');
imgEle.src = nodeImg;
imgEle.style='width: 100px; height: 100px;';


document.getElementById('app').appendChild(imgEle);
