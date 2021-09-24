// Slider wrapper containing slider state and methods
export class Slider {
  constructor(slides, active) {
    this._slides = [...slides]
    this._active = active ?? 0
    this._isChanging = false
    this._subs = []
  }

  // check if slide at index exists
  _isSlide(index) {
    return index <= this._slides.length
  }

  // returns active slide
  getActiveSlide() {
    return this._slides[this._active]
  }

  // returns an index of active slide
  getActiveSlideIndex() {
    return this._active
  }

  // adds function to be run before slide change happens
  // functions receive "index" of the next active slide as an argument
  subscribe(fn) {
    this._subs.push(fn)
  }

  // changes active slide and runs passed callbacks
  changeSlide(index, beforeChange, afterChange) {
    if (!this._isSlide(index)) {
      throw "Index is out of range!"
    }

    if (!this._isChanging) {
      this._isChanging = true

      return new Promise(async resolve => {
        this._subs.forEach(async fn => await fn(index))

        if (beforeChange) {
          await beforeChange(this.getActiveSlide())
        }

        this._active = index

        if (afterChange) {
          await afterChange(this.getActiveSlide())
        }

        this._isChanging = false
        resolve()
      })
    }
  }
}
