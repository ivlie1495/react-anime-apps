import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import CollectionCard from '../'

describe('test collectionCard', () => {
  it('render collectionCard', () => {
    render(
      <BrowserRouter>
        <CollectionCard 
          title="Hello"
          to="/"
        />
      </BrowserRouter>
    )

    const titleElement = screen.getByText('Hello')
    expect(titleElement.innerHTML).toEqual('Hello')
  })
})