import { gsap } from "gsap"

export const section3 = async () => {
  section3Title()
  section3Slider()
}

export const section3Title = async () => {
  const tl = gsap.timeline({
    scrollTrigger: "#section-3",
  })

  tl.from("#section-3 .section__title", {
    y: -150,
    opacity: 0,
    scaleX: "3",
    ease: "exp",
    duration: 0.8,
  })
    .fromTo(
      "#section-3 .divider",
      {
        opacity: 0,
        scaleX: 0,
        duration: 0.4,
      },
      {
        opacity: 1,
        scaleX: 8,
        duration: 0.4,
      }
    )
    .to("#section-3 .divider", {
      scaleX: 1,
      duration: 0.8,
      ease: "bounce",
    })
    .from("#section-3 .text--centered", {
      opacity: 0,
      duration: 1,
      x: -200,
      ease: "back",
    })
}

const section3Slider = async () => {
  const tl = gsap.timeline({ scrollTrigger: ".slider" })

  const options = {
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: "back",
  }

  tl.from(".slide__image", options)
    .from(".slide__left", options, 0.25)
    .from(".slide__arrow", options, 0.5)
    .from(
      ".dots__item",
      {
        x: 100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "back",
      },
      0.5
    )
    .from(".slide__right", options, 0.75)
    .from(".slide__line", {
      scaleX: 0,
      transformOrigin: "100% 50%",
      duration: 1,
    })
    .from(
      ".slide__link",
      {
        x: 200,
        opacity: 0,
        duration: 0.4,
      },
      0.6
    )
}
