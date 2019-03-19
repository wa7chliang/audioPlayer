export const event = [
  {
    name: 'ended',
    func: _this => {
      if (_this.options.playType === 'loop') {
        if (_this.options.songList.length > 1) {
          _this.next()
        } else {
          _this.play()
        }
      }
    }
  }
]
