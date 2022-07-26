import { css } from '@emotion/react'

export const navbarStyle = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 6px 20px;
  background-color: teal;
  color: white;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: space-between;
    gap: 0;
  }
`

export const menuStyle = css`
  display: flex;
  gap: 1em;
  font-size: 18px;

  @media (max-width: 768px) {
    display: none;
    position: absolute;
    background-color: teal;
    right: 0;
    left: 0;
    text-align: center;
    padding: 16px 0;
  }
`

export const hamburgerMenuStyle = css`
  display: none;
  font-size: 24px;
  user-select: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export const toggleStyle = css`
  display: none;

  @media (max-width: 768px) {
    &:checked ~ div {
      display: block;
    }
  }
`

export const logoStyle = css`
  font-size: 32px;
`
