"use strict";

const allBox = document.querySelectorAll(".box h3");
console.log(allBox);
allBox.forEach((el, i) => (el.textContent = `${i + 1}#`));

console.log("hello frogs");
const comments = document.querySelector(".comments");
const input = document.querySelector(".user-input");
const btnComments = document.querySelector(".more-2");
const divComment = document.querySelector(".comment");
console.log(divComment);
console.log(comments);
console.log(input);
console.log(btnComments);

btnComments.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value !== "") {
    // const div = document.createElement("div");
    // const p = document.createElement("p");
    // const img = document.createElement("div");
    // img.classList.add("img-6");
    // div.classList.add("com-1");
    // comments.prepend(div);
    // div.append(img);
    // div.append(p);
    const html = ` <div class="com-1">
      <div class="img-6">
          <img
              src="./images/pixel_art_style_street_blue_sky_yellow_hair_school_girl_7675e1f9-2d89-4a68-9f4f-814ed06262d7.png">
      </div>

      <p>${input.value}.</p>
  </div>
  `;
    // p.textContent = input.value;
    divComment.insertAdjacentHTML("beforebegin", html);
    // const scroll = div.getBoundingClientRect();

    // div.scrollIntoView({ behavior: "smooth" });// not working as expected
    // console.log(scroll);
    // window.scrollBy(scroll);
    comments.scrollTo({ left: 0, top: comments.scrollHeight });
    // comments.scrollBy(scroll.top);
    console.log(input.value);
    input.value = "";
  }
});

// ---
// const sliderContainer = document.querySelector(".landing");

// sliderContainer.addEventListener("onscroll", function () {
//   nextSlide();
// });
const sliders = document.querySelectorAll(".landing img");
const btnLeft = document.querySelector(".fa-chevron-left");
const btnRight = document.querySelector(".fa-chevron-right");
let curSlide = 0;
const maxSlide = sliders.length;
const dotsContainer = document.querySelector(".dots");

const waitFiveSecondAndthenStart = function () {
  setInterval(function () {
    nextSlide();
  }, 5000);
};
// next slide

const CreateDots = function () {
  sliders.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      ` <button class ="dot dot--active" data-slide="${i}"></button>`
    );
  });
};

const activeDot = function (slide) {
  document
    .querySelectorAll(".dot")
    .forEach((el) => el.classList.remove("dot--active"));

  document
    .querySelector(`.dot[data-slide="${slide}"]`)
    .classList.add("dot--active");
};

dotsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dot")) {
    const slideNow = e.target.dataset.slide;

    goToNextSlide(slideNow);
    activeDot(slideNow);
  }
});

const goToNextSlide = function (slide) {
  sliders.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const starting = function () {
  CreateDots();
  activeDot(0);
  goToNextSlide(0);
  waitFiveSecondAndthenStart();
};

starting();

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToNextSlide(curSlide);
  activeDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToNextSlide(curSlide);
  activeDot(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    nextSlide();
  } else if (e.key === "ArrowLeft") {
    prevSlide();
  } else if (e.key === "Escape") {
    card.classList.add("hidden");
    fade.classList.add("hidden");
  }
});
// btnRight.addEventListener("click", nextSlide);

// pop-up

const priceContaine = document.querySelector(".price");
const card = document.querySelector(".poping");
const fade = document.querySelector(".fade");
const closeModel = document.querySelector(".btn--close-modal");
console.log(closeModel);
priceContaine.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.closest(".btn--buy")) {
    card.classList.remove("hidden");
    fade.classList.remove("hidden");
  }
});

[fade, closeModel].forEach((e) =>
  e.addEventListener("click", function () {
    card.classList.add("hidden");
    fade.classList.add("hidden");
  })
);
// fade.addEventListener("click", function () {
//   card.classList.add("hidden");
//   fade.classList.add("hidden");
// });

/**
  f you want to make an element appear on Chrome but remove it on other browsers, you may need to use some browser-specific CSS selectors or JavaScript code to target the element and hide it or show it accordingly. For example, you can use the following CSS code to hide an element with the class name “my-element” on all browsers except Chrome:

// .my-element { display: none; /* hide the element by default }*/

// /* use a Chrome-specific selector to show the element only on Chrome / @media screen and (-webkit-min-device-pixel-ratio:0) { .my-element { display: block; / show the element on Chrome */ } }

// Alternatively, you can use the following JavaScript code to detect the browser name and hide or show the element based on that:

// get the browser name var browserName = navigator.userAgent.toLowerCase();

// get the element by its class name var myElement = document.getElementsByClassName (“my-element”) [0];

// if the browser is not Chrome, hide the element if (browserName.indexOf (“chrome”) == -1) { myElement.style.display = “none”; }
/*
You can find more information about browser detection and browser-specific selectors in these web search results123. I hope this helps you with your problem. If you have any other questions, feel free to ask me. 😊
 */

const btns = document.querySelector(".btn--buy");
const ele = window.getComputedStyle(btns, ":after");
// console.log(ele.backgroundColor);
// ele.display = "none";
const browserName = navigator.userAgent.toLowerCase();
const ligts = document.querySelectorAll(".light");
console.log(navigator.userAgent);
console.log(browserName.indexOf("chrome"));

// function myFunction() {
//   if (
//     (navigator.userAgent.indexOf("Opera") ||
//       navigator.userAgent.indexOf("OPR")) != -1
//   ) {
//     alert("Opera");
//   } else if (navigator.userAgent.indexOf("Edg") != -1) {
//     alert("Edge");
//   } else if (navigator.userAgent.indexOf("Chrome") != -1) {
//     alert("Chrome");
//   } else if (navigator.userAgent.indexOf("Safari") != -1) {
//     alert("Safari");
//   } else if (navigator.userAgent.indexOf("Firefox") != -1) {
//     alert("Firefox");
//   } else if (
//     navigator.userAgent.indexOf("MSIE") != -1 ||
//     !!document.documentMode == true
//   ) {
//     //IF IE > 10
//     alert("IE");
//   } else {
//     alert("unknown");
//   }
// }
// myFunction();

if (browserName.indexOf("firefox") !== -1) {
  console.log(true);
  ligts.forEach((el) => (el.style.display = "none"));
}
/*
console.log(navigator.userAgent.toLowerCase());*/
