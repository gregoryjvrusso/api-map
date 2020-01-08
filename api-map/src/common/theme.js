const breakpoints = ['40em', '52em', '64em', '80em']
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

export default {
  color: '#000000',
  breakpoints,
  space,
  colors: {
    texts: {
      primary: '#00306e',
      warning: '#8c1000'
    },
    backgrounds: {
      primary: {
        gray: '#e5e5e5',
        blue: '#4eb0de',
        hover: '#46e0d0'
      },
      warning: {
        none: '#d42c2c',
        hover: '#ff5757'
      }
    }
  }
}