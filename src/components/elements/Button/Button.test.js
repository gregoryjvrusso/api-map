import React from 'react'
import renderer from 'react-test-renderer'
import Button from './Button.js'

describe('Button component', () => {
  it('deve conseguir renderizar [snapshot]', async () => {
    const render = renderer
    .create(<Button />)
    .toJSON()
    expect(render).toMatchSnapshot()
  })
})
