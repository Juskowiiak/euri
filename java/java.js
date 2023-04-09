// -------------------------------------- menu
let menu = document.querySelector(".header-menu");
let submenu = document.querySelector(".sub-menu");

submenu.addEventListener("click", function () {
  menu.classList.toggle("sai");
});

// -------------------------------------- CARDS

let gift1 = document.querySelector(".gift1");
let gift2 = document.querySelector(".gift2");
let gift3 = document.querySelector(".gift3");
let cr1 = document.querySelector(".cr1");
let cr2 = document.querySelector(".cr2");
let cr3 = document.querySelector(".cr3");

gift1.addEventListener("click", function () {
  document.querySelector(".scr1").style.cssText =
    "display:block; position:absolute; z-index: 3; top:0; left:0";
});
cr1.addEventListener("click", function () {
  document.querySelector(".scr1").style.cssText = "display:none";
  document.querySelector(".scr2").style.cssText = "display:none";
  document.querySelector(".scr3").style.cssText = "display:none";
});
gift2.addEventListener("click", function () {
  document.querySelector(".scr2").style.cssText =
    "display:block; position:absolute; z-index: 3; top:0; left:0";
});
cr2.addEventListener("click", function () {
  document.querySelector(".scr2").style.cssText = "display:none";
  document.querySelector(".scr1").style.cssText = "display:none";
  document.querySelector(".scr3").style.cssText = "display:none";
});
gift3.addEventListener("click", function () {
  document.querySelector(".scr3").style.cssText =
    "display:block; position:absolute; z-index: 3; top:0; left:0";
});
cr3.addEventListener("click", function () {
  document.querySelector(".scr3").style.cssText = "display:none";
  document.querySelector(".scr2").style.cssText = "display:none";
  document.querySelector(".scr1").style.cssText = "display:none";
});
