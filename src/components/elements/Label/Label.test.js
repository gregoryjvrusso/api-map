import React from 'react'
import renderer from 'react-test-renderer'
import Label from './Label.js'

describe('Label component', () => {
  it('deve conseguir renderizar [snapshot]', async () => {
    const render = renderer
    .create(<Label />)
    .toJSON();
    expect(render).toMatchSnapshot()
  })
})
