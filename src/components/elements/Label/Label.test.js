import React from 'react'
import { render } from '@testing-library/react'
import Label from './Label.js'

describe('Label component', () => {
  it('deve conseguir renderizar [snapshot]', async () => {
    const { container } = render(<Label />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
