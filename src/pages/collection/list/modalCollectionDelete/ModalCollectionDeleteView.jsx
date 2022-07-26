/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useContext } from 'react'

import Modal from '../../../../components/modal'

import { CollectionListContext } from '../CollectionListContainer'
import { buttonStyle, footerModalStyle } from './modalCollectionDeleteStyle'

const ModalCollectionDeleteView = () => {
  const {
    handleDelete,
    handleShowModalDelete,
    collectionName,
  } = useContext(CollectionListContext)

  return (
    <Modal title="Confirmation" handleClose={handleShowModalDelete}>
      <p>Are you sure want to delete <strong>{collectionName}</strong> collection?</p>
      <div css={footerModalStyle}>
        <button css={buttonStyle()} onClick={handleShowModalDelete}>No</button>
        <button css={buttonStyle('add')} onClick={handleDelete}>Yes</button>
      </div>
    </Modal>
  )
}

export default ModalCollectionDeleteView