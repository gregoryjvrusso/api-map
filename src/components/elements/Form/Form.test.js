import React from 'react'
import renderer from 'react-test-renderer';
import Form from './Form.js'

describe('Form component', () => {
  it('deve conseguir renderizar [snapshot]', async () => {
    const render = renderer
    .create(<Form />)
    .toJSON();
    expect(render).toMatchSnapshot();
  })
})
