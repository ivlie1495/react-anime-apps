import { render, screen } from '@testing-library/react'

import ErrorContet from '../'

describe('test errorContent', () => {
  it('render errorContent', () => {
    render(
      <ErrorContet message="Error" />
    )

    const messageElement = screen.getByText('Error')
    expect(messageElement.innerHTML).toEqual('Error')
  })
})