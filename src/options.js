export default options => {
  const defaultOption = {
    playType: 'loop',
    mutex: true,
    errorIng: false
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
