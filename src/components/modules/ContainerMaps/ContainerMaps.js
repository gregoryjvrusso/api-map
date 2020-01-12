import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import GoogleMaps from '../../elements/GoogleMaps/GoogleMaps'
import { ReactComponent as Close } from '../../elements/Icons/close.svg'
import { geoCodeGenerator } from '../../helpers/geocode'
import ContainerAdress from '../ContainterAdress/ContainerAdress'

const Container = styled.div`
  margin-top: 1em;
`
const HeaderContainer = styled.div`
  display: flex;
`
const CloseContainer = styled.div`
  min-width: 20%;
  display: flex;
  justify-content: flex-end;
`
const CloseElement = styled(Close)`
  cursor: pointer;
  padding: 1em;
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
        <ContainerAdress data={data} />
        <CloseContainer>
          <CloseElement onClick={closeMap} />
        </CloseContainer>
      </HeaderContainer>
      {lngMap !== '' && latMap !== '' &&
        <GoogleMaps
          latMap={latMap}
          lngMap={lngMap}
        />}
    </Container>
  )
}

export default ContainerMaps