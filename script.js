const open = document.getElementById("openGift");
const letter = document.getElementById("letter");
const more = document.getElementById("moreLove");
const reveal = document.getElementById("reveal");
const again = document.getElementById("again");


function show(element) {

  element.classList.remove("hidden");

  setTimeout(() => {

    element.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  }, 80);

}


open.addEventListener("click", () => {
  show(letter);
});


more.addEventListener("click", () => {
  show(reveal);
});


again.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  setTimeout(() => {
    letter.classList.remove("hidden");
  }, 500);

});


/* Floating hearts and stars */

const petals = document.querySelector(".petals");

for (let i = 0; i < 16; i++) {

  const p = document.createElement("span");

  p.textContent = ["♡", "✦", "·"][i % 3];

  p.style.left =
    Math.random() * 100 + "%";

  p.style.animationDelay =
    Math.random() * 8 + "s";

  p.style.animationDuration =
    7 + Math.random() * 8 + "s";

  petals.appendChild(p);

}
