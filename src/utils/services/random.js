import * as randomJson from '../../mocks/random.json'

export const getRandom = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(randomJson.default)
    }, 500)
  })
}

// get selected from storage
export const getSelected = () => {
  const selected = localStorage.getItem('selected')
  return selected ? JSON.parse(selected) : null
}

// get default
export const getDefault = () => {
  const defaultPath = randomJson.default.Default.path.png
  return defaultPath
}
