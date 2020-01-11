import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import Form from '../elements/Form/Form'
import Text from '../elements/Text/Text'

const ContainerHeaderElements = styled.div`
  background-color: ${theme('colors.backgrounds.primary.gray')};
  display: flex;
  flex-direction: column;
  padding: 0.5em;
`

const ContainerHeader = ({ setData }) => {
  const [cep, setCep] = useState('')
  const [message, setMessage] = useState(false)

  return (
    <ContainerHeaderElements>
      <Text
        text={'Consultar'}
        tag={'h1'}
        fontSize='1em'
      />
      {message && <Text text={'Cep inválido'} warning />}
      <Form
        setCep={setCep}
        setMessage={setMessage}
        setData={setData}
        cep={cep}
      />
    </ContainerHeaderElements>
  )
}

export default ContainerHeader