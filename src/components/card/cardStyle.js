import { css } from '@emotion/react'

export const linkStyle = css`
  text-decoration: none;
  color: black;
`

export const cardStyle = css`
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
  cursor: pointer;
`

export const cardCoverStyle = css`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const cardBodyStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 70px;
`

export const cardTitleStyle = css`
  margin-top: 0;
  margin-bottom: 10px;
`

export const cardSoruceStyle = css`
  margin: 0;
`

export const footerStyle = css`
  padding: 10px;
`

export const buttonDeleteStyle = css`
  width: 100%;
  background-color: teal;
  color: white;
  padding: 10px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`