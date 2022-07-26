import { css } from '@emotion/react'

export const contentLeftStyle = css`
  flex: 1;
  padding: 30px;
  border-right: 1px solid;

  @media (max-width: 768px) {
    border: none;
  }
`

export const imageContainerStyle = css`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
`

export const imageStyle = css`
  max-width: 100%;
`

export const descriptionStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

export const titleStyle = css`
  margin: 0;
`

export const marginBottomStyle = css`
  margin-bottom: 20px;
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

export const collectionTextStyle = css`
  margin: 0;
  padding: 8px 0;
`

export const collectionContainerStyle = css`
  display: flex;

  @media (max-width: 768px) {
    display: block;
  }
`