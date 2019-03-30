import selectOptions from './options'
import { event } from './event'
import { changeSongIndex } from './util'

const instances = []

class Player {
  constructor(options) {
    this.options = selectOptions(options)
    this.songIndex = 0
    this.buffered
    this.template()
    this.initEvent()

    instances.push(this)
  }

  template() {
    let { el, songList } = this.options
    this.options.self = document.createElement('audio')
    this.options.self.controls = true
    if (typeof songList[this.songIndex] === 'string') {
      this.options.self.src = songList[this.songIndex]
    } else {
      this.options.self.src = songList[this.songIndex].url
    }
    document.querySelector(el).appendChild(this.options.self)
    this.options.self.style.display = 'none'
  }

  play() {
    this.options.self.play()
    if (this.options.mutex) {
      for (let i = 0; i < instances.length; i++) {
          if (this !== instances[i]) {
            instances[i].pause()
          }
      }
    }
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

  // next song
  next() {
    this.pause()
    this.songIndex < this.options.songList.length - 1
      ? changeSongIndex(this, ++this.songIndex)
      : changeSongIndex(this, (this.songIndex = 0))
    this.play()
  }

  // prev song
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
  
  //  get music buffered percent
  getBufferedPercent () {
    if (this.options.self.buffered.length) {
      return Math.floor(100 * this.options.self.buffered.end(this.options.self.buffered.length - 1) / this.options.self.duration)
    }
  }

  // get music currentTime percent
  getCurrentTimePercent () {
    return Math.floor(100 * this.options.self.currentTime / this.options.self.duration)
  }
}

export default Player
