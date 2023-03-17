const horizontal = document.getElementById("horizontal");
const vertical = document.getElementById("vertical");
const blur = document.getElementById("blur");
const color = document.getElementById("color");
const box = document.getElementById("box");

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");

let a = 0;
let b = 0;
let c = 0;
let d = "black";

box.style.boxShadow = `${a}px ${b}px ${c}px ${d}`;

horizontal.oninput = function(){
  p1.innerHTML = `horizontal: ${horizontal.value}`;
  a = horizontal.value;
  box.style.boxShadow = `${a}px ${b}px ${c}px ${d}`;
}
vertical.oninput = function(){
  p2.innerHTML = `vertical: ${vertical.value}`;
  b = vertical.value;
  box.style.boxShadow = `${a}px ${b}px ${c}px ${d}`;
}
blur.oninput = function(){
  p3.innerHTML = `blur: ${blur.value}`;
  c = blur.value;
  box.style.boxShadow = `${a}px ${b}px ${c}px ${d}`;
}
color.oninput = function(){
  p4.innerHTML = `color: ${color.value}`;
  d = color.value;
  box.style.boxShadow = `${a}px ${b}px ${c}px ${d}`;
}

let k = 0;

box.addEventListener("click", function(){
  navigator.clipboard.writeText(`box-shadow: ${a}px ${b}px ${c}px ${d};`);
  document.querySelector(".navigator").innerHTML = "You copy code";
  k = 1;
})

box.addEventListener("mouseover", function(){
  if(k = 0){
    document.querySelector(".navigator").innerHTML = "Copy code";
  }
})

box.addEventListener("mouseleave", function(){
  k = 1;
  document.querySelector(".navigator").innerHTML = "Copy code";
})