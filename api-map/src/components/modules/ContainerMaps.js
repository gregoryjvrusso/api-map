import React, { useState, useEffect } from 'react'
import GoogleMaps from '../elements/GoogleMaps'
import { geoCodeGenerator } from '../helpers/geocode'
import styled from 'styled-components'

const Title = styled.p`
  font-size: 2em;
  font-weight: bold;
  margin: 0;
`
const Text = styled.p`
  font-size: 1em;
  margin: 0em 0.5em;
`
const ContainerMaps = ({ data }) => {
  const [latMap, setLat] = useState('')
  const [lngMap, setLng] = useState('')
  useEffect(() => {
    geoCodeGenerator(data.cep, {setLat}, {setLng})
  }, [data])


  return (
    <div>
      <Title>{data.logradouro}</Title>
      <Text>{data.bairro}</Text>
      <Text>{`${data.localidade}-${data.uf}`}</Text>
      <Text>{data.cep}</Text>
      {lngMap !== '' && latMap !== '' && 
        <GoogleMaps 
          latMap={latMap} 
          lngMap={lngMap} 
      />}
    </div>
  )
}

export default ContainerMaps