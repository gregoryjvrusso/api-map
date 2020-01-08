import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'

const warning = css`
  background-color: ${p => p.theme.colors.backgrounds.warning.none};
  border-color: ${p => p.theme.colors.backgrounds.warning.none}

  :hover{
    border-color: ${p => p.theme.colors.backgrounds.warning.hover}
  }
`
const primary = css`
  background-color: ${p => p.theme.colors.backgrounds.primary.blue};
  border-color: ${p => p.theme.colors.backgrounds.primary.blue}

  :hover{
    border-color: ${p => p.theme.colors.backgrounds.primary.hover}
  }
`

const Button = styled.button`
  font-size: 14px;
  margin: 4px;
  padding: 8px 14px;
  border: 2px solid;
  border-radius: 3px;
  font-weight: bold;
  color: #FFFFFF;
  ${ifProp('warning', warning)}
  ${ifProp('primary', primary)}
`

export default Button
