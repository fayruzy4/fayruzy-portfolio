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
const musicBtn = document.getElementById("musicBtn");

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

const musicMenu = document.getElementById("musicMenu");

musicBtn.addEventListener("click", () => {
musicMenu.classList.toggle("show");
});

document.addEventListener("click", (e) => {

if (
!musicMenu.contains(e.target) &&
!musicBtn.contains(e.target)
) {

musicMenu.classList.remove("show");

}

});

function changeMusic(song){

music.src = song;

music.play();

musicBtn.innerHTML = "🔊";

playing = true;

musicMenu.classList.remove("show");

}
