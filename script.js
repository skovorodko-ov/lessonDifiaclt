'use strict';

const btn = document.querySelector('.btn');
const span = document.querySelector('.span');
const container = document.querySelector('.container');

btn.addEventListener('click', function () {
  let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  span.innerHTML = random;
  container.style.background = random;
});