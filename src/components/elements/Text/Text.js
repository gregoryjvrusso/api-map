import React from 'react'
import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'
import { fontSize, fontWeight, margin } from 'styled-system'

const warning = css`
  color: ${p => p.theme.colors.texts.warning};
  margin: 0;
`
const Text = styled.p`
  color: ${p => p.theme.colors.texts.primary};
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