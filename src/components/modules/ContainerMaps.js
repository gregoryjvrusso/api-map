import React, { useState, useEffect } from 'react'
import GoogleMaps from '../elements/GoogleMaps/GoogleMaps'
import { geoCodeGenerator } from '../helpers/geocode'
import styled from 'styled-components'
import Text from '../elements/Text/Text'

const Container = styled.div`
  margin-top: 1em;
  max-height: 50%;
`
const HeaderContainer = styled.div`
  display: flex;
`
const CloseContainer = styled.div`
  min-width: 20%;
`
const Close = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  text-align: right;
  color: ${p => p.theme.colors.backgrounds.primary.grayDark};
  margin-top: 0;
  cursor: pointer;
`
const ContainerTitle = styled.div`
  min-width: 80%;
`

const ContainerMaps = ({ data, setData }) => {
  const [latMap, setLat] = useState('')
  const [lngMap, setLng] = useState('')
  useEffect(() => {
    geoCodeGenerator(data.cep, { setLat }, { setLng })
  }, [data])

  const closeMap = () => {
    setData('')
  }

  return (
    <Container>
      <HeaderContainer>
        <ContainerTitle>
          <Text 
            text={data.logradouro} 
            fontSize='2em'
            fontWeight='bold'
            margin='0'
          />
        </ContainerTitle>
        <CloseContainer>
          <Close onClick={closeMap}>
            X
          </Close>
        </CloseContainer>
      </HeaderContainer>
      <Text text={data.bairro} margin='0' />
      <Text text={`${data.localidade}-${data.uf}`} margin='0' />
      <Text text={data.cep} margin='0 0 1em' />
      {lngMap !== '' && latMap !== '' &&
        <GoogleMaps
          latMap={latMap}
          lngMap={lngMap}
        />}
    </Container>
  )
}

export default ContainerMaps