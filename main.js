const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

} else {

entry.target.classList.remove("show");

}

});

});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => {

observer.observe(el);

});

function showCertificate(imageName){

const preview =
document.getElementById("certificate-preview");

const img =
document.getElementById("certificate-image");

if(
preview.style.display === "block" &&
img.src.includes(imageName)
){

preview.style.display = "none";

}else{

img.src = imageName;

preview.style.display = "block";

}

}
const music = document.getElementById("bgMusic");
const playlist = [
"Hindia - Cincin Official Lyric Video.mp3",
"EverythingUAre.mp3",
"IRise.mp3",
"Nasheed.Shukraan.mp3"
];

let currentSong = 0;
const musicBtn = document.getElementById("musicBtn");
let playing = false;

const musicMenu = document.getElementById("musicMenu");

musicBtn.addEventListener("click", () => {

    musicMenu.classList.toggle("show");

});
function updateClocks(){

document.getElementById("saudi-time").textContent =
new Date().toLocaleTimeString("id-ID",{
timeZone:"Asia/Riyadh"
});

document.getElementById("egypt-time").textContent =
new Date().toLocaleTimeString("id-ID",{
timeZone:"Africa/Cairo"
});

document.getElementById("london-time").textContent =
new Date().toLocaleTimeString("id-ID",{
timeZone:"Europe/London"
});

document.getElementById("indo-time").textContent =
new Date().toLocaleTimeString("id-ID",{
timeZone:"Asia/Jakarta"
});

}

updateClocks();
setInterval(updateClocks,1000);

const certCount = document.getElementById("cert-count");
const projectCount = document.getElementById("project-count");
const orgCount = document.getElementById("org-count");
const langCount = document.getElementById("lang-count");

const statsSection = document.querySelector(".stats");
let certAnimated = false;

const certObserver = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting && !certAnimated) {

certAnimated = true;

  let project = 0;

const projectInterval = setInterval(() => {

project++;

projectCount.textContent = project + "+";

if(project >= 5){

clearInterval(projectInterval);

projectCount.classList.add("stat-finish");

}

}, 400);

  let org = 0;

const orgInterval = setInterval(() => {

org++;

orgCount.textContent = org + "+";

if(org >= 2){

clearInterval(orgInterval);

orgCount.classList.add("stat-finish");

}

}, 1000);

  let lang = 0;

const langInterval = setInterval(() => {

lang++;

langCount.textContent = lang;

if(lang >= 3){

clearInterval(langInterval);

langCount.classList.add("stat-finish");

}

}, 600);

  
let cert = 0;

const certInterval = setInterval(() => {

cert++;

certCount.textContent = cert + "+";

if (cert >= 13) {

clearInterval(certInterval);
  certCount.classList.add("stat-finish");

}

}, 150);

}

});

});

certObserver.observe(statsSection);

function updateDates(){

document.getElementById("gregorian-date").textContent =
new Date().toLocaleDateString("id-ID",{
weekday:"long",
day:"numeric",
month:"long",
year:"numeric"
});

document.getElementById("hijri-date").textContent =
new Intl.DateTimeFormat("ar-SA",{
day:"numeric",
month:"long",
year:"numeric",
calendar:"islamic"
}).format(new Date());

}

updateDates();

function updateBirthdayCountdown(){

const now = new Date();

let nextBirthday = new Date(
now.getFullYear(),
0,
4
);

if(now > nextBirthday){
nextBirthday = new Date(
now.getFullYear() + 1,
0,
4
);
}

const diff = nextBirthday - now;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

const hours = Math.floor(
(diff % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutes = Math.floor(
(diff % (1000 * 60 * 60))
/
(1000 * 60)
);

const seconds = Math.floor(
(diff % (1000 * 60))
/
1000
);

document.getElementById("birthday-countdown").textContent =
`${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;

}

updateBirthdayCountdown();

setInterval(updateBirthdayCountdown,1000);

document.addEventListener("click", (e) => {

if (
!musicMenu.contains(e.target) &&
!musicBtn.contains(e.target)
) {

musicMenu.classList.remove("show");

}

});
function toggleMusic(){

if(music.paused){

music.play();

}else{

music.pause();

}

}

function changeMusic(song){
currentSong = playlist.indexOf(song);
    
music.src = song;

music.play();

musicBtn.innerHTML = "🔊";
playing = true;


musicMenu.classList.remove("show");

}
music.addEventListener("ended", () => {

currentSong++;

if(currentSong >= playlist.length){
currentSong = 0;
}

music.src = playlist[currentSong];

music.play();

});

async function updateDailyQuote() {

try {

const response = await fetch("quotes.json");

const quotes = await response.json();

const today = new Date();

const dayNumber =
Math.floor(today.getTime() / 86400000);

const quote =
quotes[dayNumber % quotes.length];

document.getElementById("daily-quote").textContent =
quote;

} catch(error) {

console.error("Quote Error:", error);

document.getElementById("daily-quote").textContent =
"Gagal memuat quote.";

}

}

updateDailyQuote();
const visitorTime =
document.getElementById("visitor-time");

function updateVisitorTime(){

const now = new Date();

visitorTime.textContent =
`Di tempat Anda jam ${now.toLocaleTimeString("id-ID")}, silakan masuk untuk melihat kapsul waktu dan fitur interaktif saya!`;

}

updateVisitorTime();

setInterval(updateVisitorTime,1000);
const overlay =
document.getElementById("welcome-overlay");

const enterBtn =
document.getElementById("enter-site");

const lastVisit =
localStorage.getItem("welcomeSeen");

if(lastVisit){

const diff =
Date.now() - Number(lastVisit);

if(diff < 86400000){

overlay.style.display = "none";

}

}

enterBtn.addEventListener("click", () => {

overlay.classList.add("fade-out");

localStorage.setItem(
"welcomeSeen",
Date.now()
);

setTimeout(() => {

overlay.style.display = "none";

}, 500);

});
console.log("WELCOME CARD AKTIF");

