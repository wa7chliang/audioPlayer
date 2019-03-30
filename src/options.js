export default options => {
  const defaultOption = {
    playType: 'loop',
    mutex: true
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
