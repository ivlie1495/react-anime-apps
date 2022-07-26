import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import AppHeader from '../'

describe('test appHeader', () => {
  it('render appHeader', () => {
    render(
      <BrowserRouter>
        <AppHeader />
      </BrowserRouter>
    )

    const appBarHeader = screen.getByTestId('appBarHeaderTestId')
    expect(appBarHeader).toBeInTheDocument()
  })
})