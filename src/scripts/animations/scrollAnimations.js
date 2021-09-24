import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { section2 } from "./section2"
import { section3 } from "./section3"
import { hero } from "./hero"

gsap.registerPlugin(ScrollTrigger)

const main = async () => {
  section2()
  section3()
  hero()
}

export default main
