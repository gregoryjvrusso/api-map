import styled from 'styled-components'
import { width } from 'styled-system'

const Button = styled.button`
  font-size: 14px;
  margin: 4px;
  padding: 8px 14px;
  border: 2px solid;
  border-radius: 3px;
  font-weight: bold;
  color: ${p => p.theme.colors.texts.white};
  background-color: ${p => p.theme.colors.backgrounds.primary.blue};
  ${width}
`

export default Button
