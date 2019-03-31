export function observe(_this, options) {
  if (!_this.options || typeof _this.options !== 'object') {
    return
  }
  defineReactive(
    _this.options,
    options.key,
    _this.options[options.key],
    options,
    _this
  )
}

function defineReactive(data, key, val, options, _this) {
  Object.defineProperty(data, key, {
    get: function() {
      return val
    },
    set: function(newVal) {
      val = newVal
      notify(options.notifyCallBack, newVal, _this)
    }
  })
}

function notify(callback, newVal, _this) {
  callback && callback(newVal, _this)
}
