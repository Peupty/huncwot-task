import { gsap } from "gsap"
import { createDelay } from "./utils/delay"

// selects and returns "onLeave" and "onEnter" functions
// based on the direction of the slider
export const createSliderAnimations = forward => {
  const leaveAnimation = forward ? fadeOutLeft : fadeOutRight
  const enterAnimation = forward ? fadeInLeft : fadeInRight

  const onLeave = async el => {
    return new Promise(async resolve => {
      await leaveAnimation()
      el.classList.toggle("slide--active")
      resolve()
    })
  }

  const onEnter = async el => {
    return new Promise(async resolve => {
      el.classList.toggle("slide--active")
      await enterAnimation()
      resolve()
    })
  }

  return { onLeave, onEnter }
}

// --------------------------------------------
// animations
// --------------------------------------------

const DURATION = 0.4
const DELAY = 0.25
const FADE_IN_LEFT = {
  from: { x: 100, opacity: 0, duration: DURATION },
  to: { x: 0, opacity: 1, duration: DURATION },
}
const FADE_IN_RIGHT = {
  from: { x: -100, opacity: 0, duration: DURATION },
  to: { x: 0, opacity: 1, duration: DURATION },
}

const FADE_OUT_LEFT = {
  from: { x: 0, opacity: 1, duration: DURATION },
  to: { x: -100, opacity: 0, duration: DURATION },
}
const FADE_OUT_RIGHT = {
  from: { x: 0, opacity: 1, duration: DURATION },
  to: { x: 100, opacity: 0, duration: DURATION },
}

const delay = createDelay(DELAY)

export const fadeInLeft = () => {
  const { from, to } = FADE_IN_LEFT

  return gsap
    .timeline()
    .fromTo(".slide__image", from, to)
    .fromTo(".slide__left", from, to, delay(1))
    .fromTo(".slide__arrow", from, to, delay(2))
    .fromTo(".slide__right", from, to, delay(3))
    .fromTo(".slide__link", from, to, delay(2.5))
    .fromTo(
      ".slide__line",
      { opacity: 0, duration: DURATION, scaleX: 0 },
      { opacity: 1, duration: DURATION, scaleX: 1 },
      delay(3.5)
    )
}

export const fadeInRight = () => {
  const { from, to } = FADE_IN_RIGHT

  return gsap
    .timeline()
    .fromTo(".slide__right", from, to)
    .fromTo(".slide__arrow", from, to, delay(1))
    .fromTo(".slide__left", from, to, delay(2))
    .fromTo(".slide__image", from, to, delay(3))
    .fromTo(".slide__line", from, to, delay(3))
    .fromTo(".slide__link", from, to, delay(2.5))
    .fromTo(
      ".slide__line",
      { opacity: 0, duration: DURATION, scaleX: 0 },
      { opacity: 1, duration: DURATION, scaleX: 1 },
      delay(3.5)
    )
}

export const fadeOutLeft = () => {
  const { from, to } = FADE_OUT_LEFT

  return gsap
    .timeline()
    .fromTo(".slide__image", from, to)
    .fromTo(".slide__left", from, to, delay(1))
    .fromTo(".slide__arrow", from, to, delay(2))
    .fromTo(".slide__right", from, to, delay(3))
    .fromTo(".slide__link", from, to, delay(2.5))
    .fromTo(
      ".slide__line",
      { opacity: 1, duration: DURATION, scaleX: 1 },
      { opacity: 0, duration: DURATION, scaleX: 0 },
      delay(3.5)
    )
}

export const fadeOutRight = () => {
  const { from, to } = FADE_OUT_RIGHT

  return gsap
    .timeline()
    .fromTo(".slide__right", from, to)
    .fromTo(".slide__arrow", from, to, delay(1))
    .fromTo(".slide__left", from, to, delay(2))
    .fromTo(".slide__image", from, to, delay(3))
    .fromTo(".slide__link", from, to, delay(2.5))
    .fromTo(
      ".slide__line",
      { opacity: 1, duration: DURATION, scaleX: 1, x: 0 },
      { opacity: 0, duration: DURATION, scaleX: 0, x: 0 },
      delay(3.5)
    )
}
