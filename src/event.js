var timer

export const event = [
  {
    name: 'ended',
    func: _this => {
      if (_this.optionList.length > 1) {
        _this.next()
      } else {
        _this.play()
      }
    }
  },
  {
    name: 'error',
    func: _this => {
      if (_this.options.errorIng) {
        if (_this.optionList.length > 1) {
          console.log('next in 2 seconds later')
          clearTimeout(timer)
          timer = setTimeout(() => {
            _this.next()
          }, 2000)
        } else {
          console.log('music error')
        }
      }
    }
  }
]

export const hasEditOptions = [
  {
    key: 'playType',
    notifyCallBack: (newVal, _this) => {
      _this.songIndex = 0
      if (newVal === 'loop') {
        _this.optionList = _this.options.songList
      } else if (newVal === 'random') {
        _this.rendomList = _this.options.songList.slice(0)
        _this.optionList = _this.rendomList.sort(() =>
          Math.random() > 0.5 ? -1 : 1
        )
      }
    }
  }
]
