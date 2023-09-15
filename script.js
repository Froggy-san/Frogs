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