new SimpleBar(document.getElementById('scrollbar'));

// CHANGE LANGUAGE

const btnLang = document.getElementById('btn-lang');
const btnLangText = document.getElementById('btn-lang-text');

btnLang.addEventListener('click', () => {
  if (btnLangText.textContent.toLocaleLowerCase() === 'en') {
    btnLangText.textContent = 'ru'
  } else {
    btnLangText.textContent = 'en'
  }
})

// BURGER MENU

const btnBurger = document.getElementById('btn-burger');
const burgerLines = document.querySelectorAll('.burger-line');
const nav = document.querySelector('.nav');

btnBurger.addEventListener('click', () => {
  nav.classList.toggle('nav__tablet-active');
  burgerLines.forEach((e) => {
    e.classList.toggle('anim');
  });
})

// ANIMATION BLOCK

function changeClasses(element, el, targetClass) {
  setTimeout(() => {
    element.classList.remove(targetClass);
    element.classList.add('empty');
    el.classList.add(targetClass);
  }, 2900);
}

function changeAnimClasses(element, animClass) {
  setTimeout(() => {
    element.classList.add(animClass);
  }, 1000);
  setTimeout(() => {
    element.classList.remove(animClass);
  }, 2900);
}

function addAnimation() {
  document.querySelectorAll('.animation-line').forEach((e) => {
    items = e.querySelectorAll('.animation-item');

    e.querySelectorAll('.animation-item').forEach((el, ind) => {

      if (el.classList.contains('empty')) {
        if (ind === 0) {
          let element = items[ind + 1];
          let targetClass = element.classList[1];

          changeAnimClasses(element, 'up');
          changeClasses(element, el, targetClass);
        } else if (ind === items.length - 1) {
          let element = items[ind - 1];
          let targetClass = element.classList[1];

          changeAnimClasses(element, 'down');
          changeClasses(element, el, targetClass);

        } else {
          let arr = [items[ind - 1], items[ind + 1]];
          let number = Math.random();
          let element = arr[Math.round(number)];
          let targetClass = element.classList[1];
          let animClass = Math.round(number) ? 'up' : 'down';

          changeAnimClasses(element, animClass);
          changeClasses(element, el, targetClass)
        }

        setTimeout(() => el.classList.remove('empty'), 100);
      }
    })
  })
}

setInterval(addAnimation, 3000);
