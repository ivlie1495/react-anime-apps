import { css } from '@emotion/react'

export const containerStyle = css`
  display: flex;
  padding: 10px;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const containerTitleStyle = css`
  display: flex;
  gap: 10px;
`

export const buttonStyle = (type) => css`
  background-color: ${type === 'add' ? 'teal' : 'red'};
  border: none;
  color: white;
  padding: 4px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 24px 2px;
  cursor: pointer;
  border-radius: 12px;
`