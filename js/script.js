const text = document.querySelector(".circle__text p");
text.innerHTML = text.innerText.split("").map((letter, i) =>
`<span class="animated-text-span" style="transform: rotateZ(${((i - 1) * 11)}deg")>${letter}</span>`
)
.join("");

// Переменная тега body
let docBody = document.querySelector('body');

let allImages = docBody.querySelectorAll('img');
let imagesToReplace = [];

for (let image of allImages) {
  imagesToReplace.push(image);
}

imagesToReplace.forEach((item) => {
  let arr = item.src.split('/').slice(3);

  let finalPath = arr[arr.length - 1];
  let fileFormat = finalPath.slice(-4); // формат файла (.svg/.png и так далее)
  let fileName = finalPath.split('.')[0]; // отдельное имя файла
  let mobileName = fileName + '-mobile' + fileFormat; // имя файла с мобильным названием объединеное в строку с указанием формата
  arr.pop();
  arr.push(mobileName)
  let finalString = arr.join('/');

  item.src = '/' + finalString;
});

// imagesToReplace.forEach((e) => {
//   console.log('.' + e);
// })


// Функционал бургер-меню
let burgerImg = document.querySelector('.mobile-burger-img');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileMenuLinks = document.querySelectorAll('.mobile-menu__link_a');


burgerImg.addEventListener('click', () => {
    if (mobileMenu.style.display !== 'block') {
        mobileMenu.style.display = 'block';
        burgerImg.src = '/img/icons/burger-cross.svg';
        docBody.style.overflow = 'hidden';
    } else {
        mobileMenu.style.display = 'none';
        burgerImg.src = '/img/icons/burger.svg';
        docBody.style.overflow = 'visible';
    }
});

for (let link of mobileMenuLinks) {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        burgerImg.src = '/img/icons/burger.svg';
        docBody.style.overflow = 'visible';
    })
}

window.addEventListener('resize', function(e) {
  if (window.innerWidth < 768) {
    console.log(window.innerWidth)
  }
  
}, true);