var timer

export default options => {
  const defaultOption = {
    playType: 'loop',
    mutex: true,
    errorHandle: function(_this) {
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
  for (const defaultKey in defaultOption) {
    if (
      defaultOption.hasOwnProperty(defaultKey) &&
      !options.hasOwnProperty(defaultKey)
    ) {
      options[defaultKey] = defaultOption[defaultKey]
    }
  }
  return options
}
