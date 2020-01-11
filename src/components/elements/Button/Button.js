import styled from 'styled-components'
import { width } from 'styled-system'
import { theme } from 'styled-tools'

const Button = styled.button`
  font-size: 14px;
  margin: 4px;
  padding: 8px 14px;
  border: 2px solid;
  border-radius: 3px;
  font-weight: bold;
  color: ${theme('colors.texts.white')};
  background-color: ${theme('colors.backgrounds.primary.blue')};
  ${width}
`

export default Button
