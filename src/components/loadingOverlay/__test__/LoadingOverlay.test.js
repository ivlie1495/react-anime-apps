import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import LoadingOverlay from '../'

describe('test loadingOverlay', () => {
  it('render loadingOverlay', () => {
    render(
      <LoadingOverlay />
    )

    const loadingElement = screen.getByTestId('loading')
    expect(loadingElement).toBeInTheDocument()
  })
})