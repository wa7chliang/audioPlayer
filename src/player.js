import selectOptions from './options'
import { event } from './event'
import { changeSongIndex } from './util'

class Player {
  constructor(options) {
    this.options = selectOptions(options)
    this.songIndex = 0
    this.template()
    this.initEvent()
  }

  template() {
    let { el, songList } = this.options
    this.options.self = document.createElement('audio')
    this.options.self.controls = true
    this.options.self.src = songList[this.songIndex]
    document.querySelector(el).appendChild(this.options.self)
    this.options.self.style.display = 'none'
  }

  play() {
    this.options.self.play()
  }

  pause() {
    this.options.self.pause()
  }

  toggle() {
    if (this.options.self.paused) {
      this.play()
    } else {
      this.pause()
    }
  }

  initEvent() {
    let _this = this
    for (let i = 0; i < event.length; i++) {
      this.options.self.addEventListener(event[i].name, () => {
        event[i].func(_this)
      })
    }
  }

  next() {
    this.pause()
    this.songIndex < this.options.songList.length - 1
      ? changeSongIndex(this, ++this.songIndex)
      : changeSongIndex(this, (this.songIndex = 0))
    this.play()
  }

  prev() {
    this.pause()
    this.songIndex !== 0
      ? changeSongIndex(this, --this.songIndex)
      : changeSongIndex(
          this,
          (this.songIndex = this.options.songList.length - 1)
        )
    this.play()
  }
}

export default Player
