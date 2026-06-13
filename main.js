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

let playing = false;

musicBtn.addEventListener("click", () => {

if(!playing){

music.play();
musicBtn.innerHTML = "🔊";
playing = true;

}else{

music.pause();
musicBtn.innerHTML = "🎵";
playing = false;

}

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

certObserver.observe(certCount);

