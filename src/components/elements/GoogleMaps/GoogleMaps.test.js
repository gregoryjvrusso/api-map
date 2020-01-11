import React from 'react'
import renderer from 'react-test-renderer';
import GoogleMaps from './GoogleMaps.js'

describe('GoogleMaps component', () => {
  it('deve conseguir renderizar [snapshot]', async () => {
    const render = renderer
    .create(<GoogleMaps latMap='-24.0252206' lngMap='-46.4931331,17' />)
    .toJSON();
    expect(render).toMatchSnapshot();
  })
})
