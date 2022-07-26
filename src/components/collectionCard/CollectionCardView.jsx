/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Link } from 'react-router-dom'

import { cardStyle, cardTitleStyle, linkStyle } from './collectionCardStyle'

const CollectionCardView = ({ title, to, handleDelete, handleEdit }) => {
  return (
    <Link to={to} css={linkStyle}>
      <div css={cardStyle}>
        <h4 css={cardTitleStyle}>{title}</h4>
        <div>
          {handleEdit && (
            <button onClick={handleEdit}>
              Edit
            </button>
          )}
          {handleDelete && (
            <button onClick={handleDelete}>
              Del
            </button>
          )}
        </div>
      </div>
    </Link>
  )
}

export default CollectionCardView