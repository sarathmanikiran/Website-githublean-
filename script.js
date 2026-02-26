// Typewriter Effect
const text = "You are my today and all of my tomorrows...";
let i = 0;
function typing(){
    if(i < text.length){
        document.querySelector(".typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,50);
    }
}
typing();

// Floating Hearts Generator
function createHearts(){
    const container = document.querySelector(".hearts-container");
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    container.appendChild(heart);

    setTimeout(()=>{ heart.remove(); },6000);
}
setInterval(createHearts,300);

// Love Counter
const startDate = new Date("2023-02-14"); // Change date
const today = new Date();
const diffTime = Math.abs(today - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("loveDays").innerText = diffDays + " Days ❤️";

// Modal
function openSurprise(){
    document.getElementById("loveModal").classList.add("show");
}
function closeSurprise(){
    document.getElementById("loveModal").classList.remove("show");
}
