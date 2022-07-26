import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Card from '../'

describe('test card', () => {
  it('render card', () => {
    render(
      <BrowserRouter>
        <Card 
          id={1}
          title="Naruto"
          source="MANGA"
        />
      </BrowserRouter>
    )

    const titleElement = screen.getByText('Naruto')
    expect(titleElement.innerHTML).toEqual('Naruto')

    const sourceElement = screen.getByText('source: MANGA')
    expect(sourceElement.innerHTML).toEqual('source: MANGA')
  })
})