const text = document.querySelector(".circle__text p");
text.innerHTML = text.innerText.split("").map((letter, i) =>
`<span class="animated-text-span" style="transform: rotateZ(${((i - 1) * 11)}deg")>${letter}</span>`
)
.join("");
