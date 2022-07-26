import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import AppHeaderLink from '..'

describe('test appHeaderLink', () => {
  it('render appHeaderLink', () => {
    render(
      <BrowserRouter>
        <AppHeaderLink to="/">
          <div>Test</div>
        </AppHeaderLink>
      </BrowserRouter>
    )

    const appBarHeaderLink = screen.getByText('Test')
    expect(appBarHeaderLink).toBeInTheDocument()
  })
})