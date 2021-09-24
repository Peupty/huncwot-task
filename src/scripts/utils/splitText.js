// TODO

const mapLetter = el => {
  if (el.match(/\s/)) return "&nbsp;"
  return el.replace(el, `<div class="letter">${el}</div>`)
}

// const wrapWord = el => {
//   if (el.match(/\s/)) return "&nbsp"
//   return el.replace(el, `<div class="word">${el}</div>`)
// }

const optionsMap = {
  letter: {
    fn: mapLetter,
    separator: "",
  },
  // word: {
  //   fn: wrapWord,
  //   separator: " ",
  // },
}

export const splitText = (selector, sep = "letter") => {
  const parent = document.querySelector(selector)
  const { fn, separator } = optionsMap[sep]
  const newText = parent.innerHTML.trim().split(separator).map(fn).join("")

  parent.innerHTML = newText
  parent.style.display = "inline-flex"

  return parent
}
