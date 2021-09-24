import "../styles/scss/main.scss"
import setupSlider from "./setupSlider"
import scrollAnimations from "./animations/scrollAnimations"
;(async () => {
  "useStrict"
  window.onload = document.querySelector("body").style.display = "initial"
  await setupSlider()
  await scrollAnimations()
})()
