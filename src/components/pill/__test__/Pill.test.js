import { render, screen } from '@testing-library/react'

import Pill from '../'

describe('test pill', () => {
  it('render pill', () => {
    render(
      <Pill value="Adventure" />
    )

    const pillElement = screen.getByText('Adventure')
    expect(pillElement.innerHTML).toEqual('Adventure')
  })
})