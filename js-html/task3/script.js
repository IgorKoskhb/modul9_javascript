let trafficLight=document.querySelector('.trafficLight');
let red=document.querySelector('.red');
let yellow=document.querySelector('.yellow');
let green=document.querySelector('.green');

red.onclick=function(){
    trafficLight.style.backgroundColor = "red";
}

yellow.onclick=function(){
    trafficLight.style.backgroundColor = "yellow";
}

green.onclick=function(){
    trafficLight.style.backgroundColor = "green";
}
