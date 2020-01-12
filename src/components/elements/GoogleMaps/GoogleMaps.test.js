import React from 'react'
import { render } from '@testing-library/react'
import GoogleMaps from './GoogleMaps.js'

describe('GoogleMaps component', () => {
  it('deve conseguir renderizar [snapshot]', async () => {
    const { container } = render(<GoogleMaps latMap='-24.0252206' lngMap='-46.4931331,17' />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
