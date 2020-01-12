import React from 'react'
import styled from 'styled-components'
import Text from '../../elements/Text/Text'

const Container = styled.div`
  width: 80%;
  padding: 0 1em;
  display: flex;
  flex-direction: column;
`

const ContainerAdress = ({ data }) => {
  return (
    <Container>
      <Text
        text={data.logradouro}
        fontSize='2em'
        fontWeight='bold'
        margin='0'
      />
      <Text text={data.bairro} margin='1em 0 0' />
      <Text text={`${data.localidade}-${data.uf}`} margin='1em 0 0' />
      <Text text={data.cep} margin='1em 0 1em' />
    </Container>
  )
}

export default ContainerAdress