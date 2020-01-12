import React from 'react'
import { render } from '@testing-library/react'
import Input from './Input.js'

describe('Input component', () => {
  it('deve conseguir renderizar [snapshot]', async () => {
    const { container } = render(<Input mask='99999-999' maskChar='' />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('deve conseguir renderizar [snapshot] com width de 80 px', async () => {
    const { container } = render(<Input width='80px' />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
