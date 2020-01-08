import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'
import { width } from 'styled-system'

const primary = css`
  background-color: ${p => p.theme.colors.backgrounds.primary.blue};
  border: 0px;
`

const Button = styled.button`
  font-size: 14px;
  margin: 4px;
  padding: 8px 14px;
  border: 2px solid;
  border-radius: 3px;
  font-weight: bold;
  color: #FFFFFF;
  ${ifProp('primary', primary)}
  ${width}
`

export default Button
