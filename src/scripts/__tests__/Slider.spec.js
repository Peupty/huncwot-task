import { Slider } from "../Slider"

test("should be defined", () => {
  expect(Slider).toBeDefined()
})

describe("Slider", () => {
  const slides = ["a", "b", "c"]

  describe("getActiveSlide method", () => {
    test("should return current slide", () => {
      const slider = new Slider(slides)

      expect(slider.getActiveSlide()).toEqual("a")
    })
  })

  describe("changeSlide method", () => {
    const slider = new Slider(slides)

    test("should throw when index is out of range", () => {
      expect(() => slider.changeSlide(4)).toThrow()
    })

    test("should correctly change slide when index exists", () => {
      slider.changeSlide(2)

      expect(slider.getActiveSlide()).toEqual("c")
    })

    test("should call beforeChange and afterChange functions with correct argument", async () => {
      const before = jest.fn()
      const after = jest.fn()

      await slider.changeSlide(0, before, after)

      expect(before).toHaveBeenCalledWith("c")
      expect(after).toHaveBeenCalledWith("a")
    })

    test("should not change slide property when another change is happening", async () => {
      const before = jest.fn(() => setTimeout(Promise.resolve), 400)
      const another = jest.fn(() => Promise.resolve())

      await Promise.all([
        slider.changeSlide(2, before),
        slider.changeSlide(1, another),
      ])

      expect(before).toHaveBeenCalled()
      expect(another).not.toHaveBeenCalled()
      expect(slider._active).toEqual(2)
    })
  })
})
