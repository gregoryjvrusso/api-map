import React, { useState, useEffect } from 'react'
import GoogleMaps from '../elements/GoogleMaps'
import { geoCodeGenerator } from '../helpers/geocode'
import styled from 'styled-components'

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
const Title = styled.p`
  font-size: 2em;
  font-weight: bold;
  margin: 0;
`
const Text = styled.p`
  font-size: 1em;
  margin: 0em 0.5em;
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
          <Title>{data.logradouro}</Title>
        </ContainerTitle>
        <CloseContainer>
          <Close onClick={closeMap}>
            X
          </Close>
        </CloseContainer>
      </HeaderContainer>
      <Text>{data.bairro}</Text>
      <Text>{`${data.localidade}-${data.uf}`}</Text>
      <Text>{data.cep}</Text>
      {lngMap !== '' && latMap !== '' &&
        <GoogleMaps
          latMap={latMap}
          lngMap={lngMap}
        />}
    </Container>
  )
}

export default ContainerMaps