let chars = 'Принять участие в исследовании '.split('');
spin.innerHTML = chars.map((c, i) => {
  return `<div class=char style="--a:${360/chars.length*i}deg">${c}</div>`
}).join('');