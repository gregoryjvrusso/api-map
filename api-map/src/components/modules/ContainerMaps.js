import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import GoogleMaps from '../elements/GoogleMaps'
import { geoCodeGenerator } from '../helpers/geocode'


const ContainerMaps = ({ data }) => {
  const [latMap, setLat] = useState('')
  const [lngMap, setLng] = useState('')
  useEffect(() => {
    geoCodeGenerator(data.cep, {setLat}, {setLng})
  }, [data])


  return (
    <div>
      <h1>{data.logradouro}</h1>
      <p>{data.bairro}</p>
      <p>{`${data.localidade}-${data.uf}`}</p>
      <p>{data.cep}</p>
      {lngMap !== '' && latMap !== '' && <GoogleMaps latMap={latMap} lngMap={lngMap} />}
    </div>
  )
}

export default ContainerMaps