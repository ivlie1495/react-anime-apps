/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Link } from 'react-router-dom'

import { buttonDeleteStyle, cardBodyStyle, cardCoverStyle, cardSoruceStyle, cardStyle, cardTitleStyle, footerStyle, linkStyle } from './cardStyle'

const Card = ({ id, coverImage, title, source, handleDelete }) => {
  return (
    <Link to={`/anime/detail/${id}`} css={linkStyle}>
      <div css={cardStyle}>
        <img 
          src={coverImage}
          alt={title} 
          css={cardCoverStyle}
        />
        <div css={cardBodyStyle}>
          <h4 css={cardTitleStyle}>{title}</h4>
          <p css={cardSoruceStyle}>source: {source}</p>
        </div>
        {handleDelete && (
          <div css={footerStyle}>
            <button css={buttonDeleteStyle} onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
    </Link>
  )
}

export default Card