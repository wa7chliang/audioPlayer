export function changeSongIndex(_this, num) {
  if (typeof _this.optionList[num] === 'string') {
    _this.options.self.src = _this.optionList[num]
  } else {
    _this.options.self.src = _this.optionList[num].url
  }
}
