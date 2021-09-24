import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { section2 } from "./animations/section2"
import { section3 } from "./animations/section3"
import { hero } from "./animations/hero"

gsap.registerPlugin(ScrollTrigger)

const main = async () => {
  section2()
  section3()
  hero()
}

export default main
