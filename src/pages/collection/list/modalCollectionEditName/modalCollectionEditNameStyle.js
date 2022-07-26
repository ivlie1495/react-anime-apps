import { css } from '@emotion/react'

export const footerModalStyle = css`
  display: flex;
  justify-content: flex-end;
`

export const buttonStyle = (type) => css`
  background-color: ${type === 'add' ? 'teal' : 'red'};
  border: none;
  color: white;
  padding: 8px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 2px;
  cursor: pointer;
  border-radius: 12px;
`