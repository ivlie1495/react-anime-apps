/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useContext } from 'react'

import Modal from '../../../../components/modal'

import { CollectionDetailContext } from '../CollectionDetailContainer'
import { buttonStyle, footerModalStyle } from './modalCollectionDeleteStyle'

const ModalCollectionDeleteView = () => {
  const {
    handleDelete,
    handleShowDelete,
    animeName,
  } = useContext(CollectionDetailContext)

  return (
    <Modal title="Confirmation" handleClose={handleShowDelete}>
      <p>Are you sure want to delete <strong>{animeName}</strong> from collection?</p>
      <div css={footerModalStyle}>
        <button css={buttonStyle()} onClick={handleShowDelete}>No</button>
        <button css={buttonStyle('add')} onClick={handleDelete}>Yes</button>
      </div>
    </Modal>
  )
}

export default ModalCollectionDeleteView