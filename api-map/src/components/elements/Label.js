import styled, { css } from 'styled-components'
import { theme, ifProp } from 'styled-tools'
import { fontSize, space } from 'styled-system'

const warning = css`
  color: ${p => p.theme.colors.texts.warning};
`

const Label = styled.label`
  padding: 8px 8px;
  margin: 2px 10px;
  color: ${theme('color', 'yellow')};
  ${ifProp('warning', warning)}
  ${fontSize}
  ${space}
`

export default Label
