import React from 'react'
import styled, { css } from 'styled-components'
import { ifProp, theme } from 'styled-tools'
import { fontSize, fontWeight, margin } from 'styled-system'

const warning = css`
  color: ${theme('colors.texts.warning')};
`
const Text = styled.p`
  color: ${theme('colors.texts.primary')};
  ${fontSize}
  ${fontWeight}
  ${margin}
  ${ifProp('warning', warning)}
`

const TextDefault = ({ tag = 'p', text, ...others}) => {
  return (
    <Text 
      {...others} 
      as={tag}
    >
      {text}
    </Text>
  )
}

export default TextDefault