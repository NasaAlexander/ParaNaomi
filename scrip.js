const startDate = new Date("December 9, 2025 00:00:00");

function actualizarTiempo(){

const now = new Date();
const diff = now - startDate;

const seconds = Math.floor(diff / 1000) % 60;
const minutes = Math.floor(diff / (1000*60)) % 60;
const hours = Math.floor(diff / (1000*60*60)) % 24;
const days = Math.floor(diff / (1000*60*60*24));
const months = Math.floor(days / 30);
const years = Math.floor(months / 12);

document.getElementById("years").textContent = years;
document.getElementById("months").textContent = months % 12;
document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;

}

setInterval(actualizarTiempo,1000);



/* =============================
   REPRODUCTOR MUSICA
============================= */

let currentSong = null;

function playSong(id){

const song = document.getElementById(id);

/* detener otras canciones */

document.querySelectorAll("audio").forEach(audio=>{

if(audio !== song){

audio.pause();
audio.currentTime = 0;

}

});

/* play / pause */

if(song.paused){

song.play();
currentSong = song;

}else{

song.pause();

}

}



/* =============================
   CORAZONES FLOTANDO
============================= */

function crearCorazon(){

const corazon = document.createElement("div");

corazon.className = "corazon";

corazon.innerHTML = "💖";

corazon.style.left = Math.random()*100 + "vw";

corazon.style.fontSize = (Math.random()*20 + 18) + "px";

document.body.appendChild(corazon);

setTimeout(()=>{

corazon.remove();

},6000);

}

/* cada cierto tiempo */

setInterval(crearCorazon,1800);



/* =============================
   ANIMACION ENTRADA
============================= */

window.addEventListener("DOMContentLoaded",()=>{

const sections = document.querySelectorAll("section");

sections.forEach((sec,i)=>{

sec.style.opacity = 0;
sec.style.transform = "translateY(40px)";

setTimeout(()=>{

sec.style.transition = "all 0.9s ease";
sec.style.opacity = 1;
sec.style.transform = "translateY(0)";

},300*i);

});

});