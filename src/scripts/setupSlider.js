import { Slider } from "./Slider"
import { createSliderAnimations } from "./sliderAnimations"

const setupSlider = async () => {
  "useStrict"
  // check if slider is going forward
  const isForward = (from, to) => from < to

  // creates single dot HTMLElement
  const createDotElement = async index => {
    const el = document.createElement("div")
    el.innerText = String(index + 1)
    el.className = "dots__item"

    return el
  }

  // creates a function that removes "active" css class from dot elements
  // and applies the same class to element at "index"
  const createDotSetter = dots => index =>
    dots.forEach((el, idx) => {
      if (index === idx) {
        el.classList.add("dots__item--active")
      } else {
        el.classList.remove("dots__item--active")
      }
    })

  // slider HTMLElement
  const sliderEl = document.querySelector(".slider")

  // array of .slide HTMLElements
  const slides = Array.from(sliderEl.querySelectorAll(".slide"))

  const slider = new Slider(slides)

  // map a dot HTMLElement for every .slide element in the DOM
  const dots = await Promise.all(
    slides.map((_slide, index) => createDotElement(index))
  )

  const setActiveDot = createDotSetter(dots)

  // subscribe dot change to the slider change
  slider.subscribe(setActiveDot)

  // set active dot
  setActiveDot(slider.getActiveSlideIndex())

  // add 'click' listeners to dot elements
  await Promise.all(
    dots.map(async (el, index) => {
      el.addEventListener("click", async () => {
        const activeSlideIndex = slider.getActiveSlideIndex()

        if (index !== activeSlideIndex) {
          const forward = isForward(activeSlideIndex, index)
          const { onLeave, onEnter } = createSliderAnimations(forward, index)

          await slider.changeSlide(index, onLeave, onEnter)
        }
      })
    })
  )

  // create dots container
  const dotsContainer = document.createElement("div")
  dotsContainer.className = "slider__dots dots"

  // append dot elements to dot container
  dotsContainer.append(...dots)

  // append dots to slider
  sliderEl.appendChild(dotsContainer)
}

export default setupSlider
