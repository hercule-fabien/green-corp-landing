const INCREASE_NUMBER_ANIMATION_SPEED = 50;
let animationInited = false;

function increaseNumberAnimationStep(i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + "+";
    } else {
      element.innerText = i;
    }
    i += 100;
  }
  setTimeout(function () {
    increaseNumberAnimationStep(i, element, endNumber);
  }, INCREASE_NUMBER_ANIMATION_SPEED);
}

function initIncreaseNumberAnimation() {
  let element = document.querySelector(".features__clients-count");
  increaseNumberAnimationStep(0, element, 5000);
}

let budget = document.querySelector("#budget");
budget.addEventListener("change", function handleEventChange(event) {
  if (event.target.value === "other") {
    // Do smthn
    formContainer = document.createElement("div");
    formContainer.classList.add("form__group");
    formContainer.classList.add("form__other-input");

    const input = document.createElement("input");
    input.setAttribute("placeholder", "Введите ваш вариант");
    input.setAttribute("type", "text");

    formContainer.appendChild(input);

    const form = document.querySelector("#form form");
    form.insertBefore(formContainer, document.querySelector(".form__submit"));
  }

  let other_input = document.querySelector(".form__other-input");

  if (event.target.value !== "other" && Boolean(other_input)) {
    document.querySelector("#form form").removeChild(other_input);
  }
});

function updateScroll() {
  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("header__scrolled");
  } else {
    document.querySelector("header").classList.remove("header__scrolled");
  }

  // Запуск анимации увеличения числа
  let windowBottomPosition = window.scrollY + window.innerHeight;
  let countElementPosition = document.querySelector(
    ".features__clients-count"
  ).offsetTop;
  if (windowBottomPosition >= countElementPosition && !animationInited) {
    animationInited = true;
    initIncreaseNumberAnimation();
  }
}

window.addEventListener("scroll", updateScroll);
