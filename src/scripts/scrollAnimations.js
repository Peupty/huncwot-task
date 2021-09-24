import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { section2 } from "./animations/section2"
import { section3 } from "./animations/section3"

gsap.registerPlugin(ScrollTrigger)

const main = async () => {
  section2()
  section3()
  await heroAnimation()
  heroScrollAnimation()
}

const heroAnimation = async () => {
  const tl = gsap.timeline()

  return tl
    .fromTo(
      ".hero__background--image",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
      }
    )
    .from(
      ".hero__heading .letter",
      {
        y: -300,
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.02,
        reversed: true,
        ease: "back",
      },
      0.3
    )
    .from(
      ".hero__subheading",
      {
        y: 300,
        opacity: 0,
        duration: 0.8,
        ease: "back",
      },
      0.3
    )
    .from(".hero__scroll", {
      y: 200,
      opacity: 0,
      duration: 1,
      ease: "expo",
    })
    .fromTo(
      ".hero__button",
      { scale: 1, duration: 0.4 },
      { scale: 1.2, duration: 0.4 },
      5
    )
    .to(".hero__button", { scale: 1, duration: 0.4 })
}

const heroScrollAnimation = async () => {
  const heroMarkTl = gsap.timeline({ yoyo: true, repeat: -1 })

  return heroMarkTl.to(".hero__mark", {
    scrollTrigger: {
      trigger: ".hero__mark",
      endTrigger: ".hero__heading",
      toggleActions: "play pause none none",
    },
    y: 30,
    duration: 0.8,
  })
}

export default main
