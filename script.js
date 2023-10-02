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
let commentss = [];
function scrollAllTheWay() {
  comments.scrollTo({
    left: 0,
    top: comments.scrollHeight,
    behavior: "smooth",
  });
}

function postComments() {
  // console.log(localStorage.getItem("comments"));
  scrollAllTheWay();
  const storedComments = localStorage.getItem("storedComments");
  if (!storedComments) return;
  commentss = JSON.parse(storedComments);
  console.log(commentss);
  console.log(storedComments);
  commentss.forEach((el) => {
    const html = el;
    divComment.insertAdjacentHTML("beforebegin", html);
    scrollAllTheWay();
  });
}
postComments();

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
    scrollAllTheWay();
    // comments.scrollBy(scroll.top);
    console.log(input.value);
    input.value = "";

    commentss.push(html);
    localStorage.setItem("storedComments", JSON.stringify(commentss));
  }
});

// ---
// const sliderContainer = document.querySelector(".landing");

// sliderContainer.addEventListener("onscroll", function () {
//   nextSlide();
// });
const landing = document.querySelector(".landing");
const sliders = document.querySelectorAll(".landing img");
const btnLeft = document.querySelector(".fa-chevron-left");
const btnRight = document.querySelector(".fa-chevron-right");
let curSlide = 0;
const maxSlide = sliders.length;
const dotsContainer = document.querySelector(".dots");
let autoSlide, timeOutTostart;

const waitFiveSecondAndthenStart = function () {
  const auto = setInterval(() => {
    nextSlide();
  }, 5000);
  return auto;
};
const checkToStopSlideOrMoveIT = function () {
  if (autoSlide) clearInterval(autoSlide);

  return setTimeout(() => {
    autoSlide = waitFiveSecondAndthenStart();
  }, 5000);
};
// next slide

// const autoSlideFun = function () {
//   if (autoSlide) clearInterval(autoSlide);

//   const startCount = setTimeout(() => {
//       autoSlide = waitFiveSecondAndthenStart();
//   }, 10000);
//   timeOutTostart = startCount;

//   if (timeOutTostart) clearTimeout(timeOutTostart);
//   timeOutTostart = startCount;
// };

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

const goToNextSlide = function (slide) {
  sliders.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const starting = function () {
  CreateDots();
  activeDot(0);
  goToNextSlide(0);
  autoSlide = waitFiveSecondAndthenStart();
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
landing.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-chevron-right")) {
    nextSlide();

    if (timeOutTostart) clearTimeout(timeOutTostart);
    timeOutTostart = checkToStopSlideOrMoveIT();
  }
  if (e.target.classList.contains("fa-chevron-left")) {
    prevSlide();

    if (timeOutTostart) clearTimeout(timeOutTostart);
    timeOutTostart = checkToStopSlideOrMoveIT();
  }
  if (e.target.classList.contains("dot")) {
    const slideNow = e.target.dataset.slide;
    goToNextSlide(slideNow);
    activeDot(slideNow);

    if (timeOutTostart) clearTimeout(timeOutTostart);
    timeOutTostart = checkToStopSlideOrMoveIT();
  }
});

// ------------ we replaced the code below by adding event delegation to the landing element

// btnRight.addEventListener("click", nextSlide);
// btnLeft.addEventListener("click", prevSlide);
// dotsContainer.addEventListener("click", function (e) {
//   if (e.target.classList.contains("dot")) {
//     const slideNow = e.target.dataset.slide;

//     goToNextSlide(slideNow);
//     activeDot(slideNow);
//   }
// });

///
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

//             -------------------------- bing {once:ture} i think  you should llook it up //
/*
You’re welcome. I think you have done a great job with your code. You have used the clearTimeout() function correctly and efficiently. You have also followed the best practices of JavaScript coding, such as using descriptive variable names, comments, and data attributes. Your code is well-structured and easy to read.

Some possible areas for improvement are:

You could use a ternary operator instead of an if-else statement for simple conditions, such as in the nextSlide() and prevSlide() functions. This would make your code more concise and elegant. For example:
const nextSlide = () => {
  curSlide === maxSlide - 1 ? (curSlide = 0) : curSlide++;
  goToNextSlide(curSlide);
  activeDot(curSlide);
};

You could use the addEventListener() method with the option {once: true} to run a function only once after a certain event, such as in the checkToStopSlideOrMoveIT() function. This would make your code more reliable and avoid creating multiple timeouts or intervals. For example:
const checkToStopSlideOrMoveIT = () => {
  if (autoSlide) clearInterval(autoSlide);

  landing.addEventListener(
    "click",
    () => {
      autoSlide = waitFiveSecondAndthenStart();
    },
    { once: true }
  );
};

You could use a switch statement instead of multiple if statements for checking the class of the target element in the landing click event listener. This would make your code more organized and readable. For example:
landing.addEventListener("click", (e) => {
  switch (true) {
    case e.target.classList.contains("fa-chevron-right"):
      nextSlide();
      break;
    case e.target.classList.contains("fa-chevron-left"):
      prevSlide();
      break;
    case e.target.classList.contains("dot"):
      const slideNow = e.target.dataset.slide;
      goToNextSlide(slideNow);
      activeDot(slideNow);
      break;
    default:
      return;
  }
  if (timeOutTostart) clearTimeout(timeOutTostart);
  timeOutTostart = checkToStopSlideOrMoveIT();
});

I hope these suggestions help you improve your code further. If you have any questions or need any help with your code, please let me know. 😊

5
of
30






i think this is very interesting, but i haven't learned about it , can you tell me more about it and how to use it, start easy at first please, am not that good at coding , const checkToStopSlideOrMoveIT = () => {
  if (autoSlide) clearInterval(autoSlide);

  landing.addEventListener(
    "click",
    () => {
      autoSlide = waitFiveSecondAndthenStart();
    },
    { once: true }
  );
};
Searching for: addEventListener once option

Searching for: addEventListener once option

Generating answers for you…

Generating answers for you…

Sure, I’m happy to tell you more about the once option and how to use it. The once option is a way to make an event listener run only once after being added. This means that the listener will be automatically removed after it is invoked for the first time. This can be useful when you want to perform a one-time action in response to an event, such as showing a message, playing a sound, or starting a timer.

To use the once option, you need to pass an object as the third argument to the addEventListener method. The object should have a property called once with a value of true. For example:

// Add a click listener that runs only once
element.addEventListener('click', function() {
  // Do something
}, { once: true });

In your code, you are using the once option to add a click listener to the landing element. This listener will call the waitFiveSecondAndthenStart function, which returns a new interval for autoSlide. This means that after the user clicks on the landing element, the slides will start changing automatically every five seconds. However, this will only happen once, because the listener will be removed after the first click. This is a clever way to avoid creating multiple intervals or timeouts that could interfere with each other.

I hope this explanation helps you understand how to use the once option and why it is useful. If you have any questions or need any help with your code, please let me know. 😊

Learn more:
1. developer.mozilla.org
2. stackoverflow.com
3. educative.io
4. dev.to
6
of
30
do you mean if i clicked once again on the element, it won't do anything?
Generating answers for you…

Generating answers for you…

Yes, that’s correct. If you clicked once again on the element, it won’t do anything. The once option makes the listener run only once and then removes it. So, the next time you click on the element, there will be no listener to handle the click event. This is different from a regular listener that stays attached to the element and runs every time the event occurs.

7
of
30
can you use the {once:true} on my code, so i can understand it better?
Generating answers for you…

Generating answers for you…

Sure, I can use the {once: true} option on your code, so you can understand it better. Here is the modified code with the once option added:

const landing = document.querySelector(".landing");
const sliders = document.querySelectorAll(".landing img");
const btnLeft = document.querySelector(".fa-chevron-left");
const btnRight = document.querySelector(".fa-chevron-right");
let curSlide = 0;
const maxSlide = sliders.length;
const dotsContainer = document.querySelector(".dots");
let autoSlide, timeOutTostart;

const waitFiveSecondAndthenStart = () => {
  const auto = setInterval(() => {
    nextSlide();
  }, 5000);
  return auto;
};
const checkToStopSlideOrMoveIT = () => {
  if (autoSlide) clearInterval(autoSlide);

  landing.addEventListener(
    "click",
    () => {
      autoSlide = waitFiveSecondAndthenStart();
    },
    { once: true }
  );
};
// next slide

// const autoSlideFun = function () {
//   if (autoSlide) clearInterval(autoSlide);

//   const startCount = setTimeout(() => {
//       autoSlide = waitFiveSecondAndthenStart();
//   }, 10000);
//   timeOutTostart = startCount;

//   if (timeOutTostart) clearTimeout(timeOutTostart);
//   timeOutTostart = startCount;
// };

const CreateDots = () => {
  sliders.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      ` <button class ="dot dot--active" data-slide="${i}"></button>`
    );
  });
};

const activeDot = (slide) => {
  document
    .querySelectorAll(".dot")
    .forEach((el) => el.classList.remove("dot--active"));

  document
    .querySelector(`.dot[data-slide="${slide}"]`)
    .classList.add("dot--active");
};

const goToNextSlide = (slide) => {
  sliders.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const starting = () => {
  CreateDots();
  activeDot(0);
  goToNextSlide(0);
  autoSlide = waitFiveSecondAndthenStart();
};

starting();

const nextSlide = () => {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToNextSlide(curSlide);
  activeDot(curSlide);
};

const prevSlide = () => {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToNextSlide(curSlide);
  activeDot(curSlide);
};
landing.addEventListener("click", (e) => {
  switch (true) {
    case e.target.classList.contains("fa-chevron-right"):
      nextSlide();
      break;
    case e.target.classList.contains("fa-chevron-left"):
      prevSlide();
      break;
    case e.target.classList.contains("dot"):
      const slideNow = e.target.dataset.slide;
      goToNextSlide(slideNow);
      activeDot(slideNow);
      break;
    default:
      return;
  }
  
});

I have added the once option to the checkToStopSlideOrMoveIT function, which adds a click listener to the landing element. This listener will run only once and then be removed. This means that the slides will start changing automatically only after the first click on the landing element. If you click on the landing element again, nothing will happen.

I hope this code helps you understand how to use the once option better. If you have any questions or need any help with your code, please let me know. 😊
*/

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

// search bar
// const bars = document.querySelector(".bars");
// const navBar = document.querySelector(".nav-bar");
const search = document.querySelector(".fa-magnifying-glass");
const searchBarDiv = document.querySelector(".search-bar");
const searchBar = document.querySelector(".search-bar input");
const removeSearchText = document.querySelector(".search-bar span");
console.log(searchBar);
search.addEventListener("click", () => {
  searchBarDiv.classList.toggle("rotate");
  if (!searchBarDiv.classList.contains("rotate")) {
    searchBar.focus();
  } else if (searchBarDiv.classList.contains("rotate")) {
    searchBar.blur();
  }
});
removeSearchText.addEventListener("click", () => {
  if (searchBar.value !== "") {
    searchBar.value = "";
  }
});
// bars.addEventListener("click", () => {
//   navBar.classList.toggle("hidden-2");
// });

// if (window.innerWidth <= 1099) {
//   navBar.classList.remove("hidden-2");
// }else{
//   navBar.classList.add("hidden-2")
// }

//                ---------------------------------   ///
const allHeaders = document.querySelectorAll(".container h2");
const errorMessage = searchBarDiv.querySelector("p");
console.log(errorMessage);
const removeError = function () {
  return setTimeout(() => {
    errorMessage.classList.add("hidden");
  }, 4000);
};
let errTime;
console.log(allHeaders);

// searchBarDiv.addEventListener("submit", function (e) {
//   e.preventDefault();
//   allHeaders.find((el) => {
//     if (
//       el.innerText.trim() === searchBar.value.trim() ||
//       el.innerText.toLowerCase().trim() === searchBar.value.toLowerCase().trim()
//     ) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   });
// });

searchBarDiv.addEventListener("submit", function (e) {
  e.preventDefault();
  const el = Array.from(allHeaders).find((el) => {
    return (
      el.innerText.trim() === searchBar.value.trim() ||
      el.innerText.toLowerCase().trim() === searchBar.value.toLowerCase().trim()
    );
  });
  if (el) {
    console.log(true);
    // el.closest(".container").scrollIntoView({ behavior: "smooth" });
    const parent = el.closest(".container").getBoundingClientRect();
    console.log(parent);
    //scrolling
    window.scrollTo(
      parent.left + window.pageXOffset,
      parent.top + window.pageYOffset - 180
    );
    searchBar.value = "";
    searchBarDiv.classList.add("rotate");
    searchBar.blur();
  } else {
    errorMessage.classList.remove("hidden");

    if (errTime) clearTimeout(errTime);
    errTime = removeError();
    // console.log(false);
  }
});

// searchBarDiv.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const all = document.querySelectorAll(".container");
//   console.log(all);
//   all.forEach((el) => {
//     let h2 = el.querySelector("h2");
//     if (h2 && searchBar.value === h2.innerText) {
//       console.log(true);
//     }
//   });
// });

// Adding sticky nav

const header = document.querySelector("header");

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry, "HERE!");

  if (!entry.isIntersecting) header.classList.add("fixed");
  else header.classList.remove("fixed");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, // mmsh 3arf
  threshold: 0, // kam fel % men el target bayn fel shasha
  // rootMargin: `-${navHight}px`, // abl el threshold b -90px e3mel call ll function
});
headerObserver.observe(landing);
// implementing section obsorver

const allLinks = document.querySelectorAll(".nav-bar ul li");
console.log(allLinks);
const services = document.querySelector(".services-link");
const portfolio = document.querySelector(".portflio");
const home = document.querySelector(".home");
const about = document.querySelector(".nav-bar ul .about");
const pricing = document.querySelector(".nav-bar ul .pricing");
const contact = document.querySelector(".nav-bar ul .contact-us");
console.log(about, pricing, contact);
const allSections = document.querySelectorAll(".observe");
console.log(allSections);
const hoverSection = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (entry.target.classList.contains("landing")) {
    home.classList.add("selected");
    // header.classList.remove("fixed");
  } else {
    home.classList.remove("selected");
    // header.classList.add("fixed");
  }

  if (entry.target.classList.contains("section-1")) {
    services.classList.add("selected");
  } else {
    services.classList.remove("selected");
  }

  if (entry.target.classList.contains("section-2")) {
    portfolio.classList.add("selected");
  } else {
    portfolio.classList.remove("selected");
  }

  if (entry.target.classList.contains("section-3")) {
    about.classList.add("selected");
  } else {
    about.classList.remove("selected");
  }

  if (entry.target.classList.contains("section-4")) {
    pricing.classList.add("selected");
  } else {
    pricing.classList.remove("selected");
  }

  if (entry.target.classList.contains("section-5")) {
    contact.classList.add("selected");
  } else {
    contact.classList.remove("selected");
  }
};

const sectionObserver = new IntersectionObserver(hoverSection, {
  root: null,
  threshold: 0.5,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
});

// adding the currnet year to the copy right

const currentYearContainer = document.querySelector(".current-year");

const currentYear = new Date().getFullYear();

currentYearContainer.innerText = currentYear;
