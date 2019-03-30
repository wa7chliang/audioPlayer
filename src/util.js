export function changeSongIndex(_this, num) {
  if (typeof _this.options.songList[num] === 'string') {
    _this.options.self.src = _this.options.songList[num]
  } else {
    _this.options.self.src = _this.options.songList[num].url
  }
}
