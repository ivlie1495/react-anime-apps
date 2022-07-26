/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { currentPageStyle, paginationButtonStyle, paginationStyle } from './paginationStyle'

const PaginationView = ({ handleChangePage, currentPage, hasNextPage, total }) => {
  return (
    <div css={paginationStyle}>
      <button 
        css={paginationButtonStyle} 
        onClick={() => handleChangePage(currentPage - 1)}
      >
        &laquo;
      </button>
      <div css={currentPageStyle}>{currentPage}</div>
      <button 
        css={paginationButtonStyle} 
        onClick={() => handleChangePage(currentPage + 1)} 
        disabled={!hasNextPage}
      >
        &raquo;
      </button>
    </div>
  )
}

export default PaginationView