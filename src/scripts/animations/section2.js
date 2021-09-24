import { gsap } from "gsap/all"
import { toArray } from "gsap/gsap-core"
import { splitText } from "../utils/splitText"

const splitTextByLetter = selector => splitText(selector, "letter")

splitTextByLetter(".hero__heading--medium")
splitTextByLetter(".hero__heading--small")
splitTextByLetter(".hero__heading--large")

export const section2Text = async () => {
  const sectionTexts = toArray("#section-2 .text")

  return sectionTexts.forEach(text =>
    gsap.from(text, {
      scrollTrigger: {
        trigger: text,
      },
      y: 150,
      opacity: 0,
      duration: 0.75,
    })
  )
}

export const section2Quote = async () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".quote",
    },
  })

  tl.from(".quote__image", {
    scale: 0,
    duration: 1.5,
  })
    .from(
      ".quote__mark",
      {
        x: 250,
        y: -50,
        duration: 1.3,
        opacity: 0,
        rotate: "720",
        ease: "back",
      },
      0
    )
    .from(".quote__line", {
      scaleX: 0,
      duration: 0.8,
      ease: "back.out",
    })
    .from(
      ".quote__text",
      {
        x: 200,
        duration: 1,
        opacity: 0,
      },
      0.5
    )
    .from(
      ".quote__author",
      {
        x: 200,
        duration: 1,
        opacity: 0,
      },
      0.8
    )
}

export const section2 = async () => {
  section2Text()
  section2Quote()
}
