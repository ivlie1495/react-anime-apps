import { render, screen } from '@testing-library/react'

import Snackbar from '../'

describe('test snackbar', () => {
  it('render snackbar', () => {
    render(
      <Snackbar message="Failed" />
    )

    const snackbarElement = screen.getByText('Failed')
    expect(snackbarElement.innerHTML).toEqual('Failed')
  })
})