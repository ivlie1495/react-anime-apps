/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useContext } from 'react'

import Modal from '../../../../components/modal'
import { inputCollectionTextStyle } from '../../detail/collectionDetailStyle'

import { CollectionListContext } from '../CollectionListContainer'
import { buttonStyle, footerModalStyle } from './modalCollectionEditNameStyle'

const ModalCollectionEditNameView = () => {
  const {
    collectionName,
    setCollectionName,
    handleShowModalEdit,
    handleEdit
  } = useContext(CollectionListContext)

  return (
    <Modal title="Edit Collection" handleClose={() => handleShowModalEdit(false)}>
      <input 
        type="text" 
        id="collection" 
        name="collection" 
        placeholder="Collection Name" 
        css={inputCollectionTextStyle}
        value={collectionName}
        onChange={({ target: { value }}) => setCollectionName(value.replace(/[^A-Z0-9]/ig, ''))}
      />
      <div css={footerModalStyle}>
        <button css={buttonStyle()} onClick={() => handleShowModalEdit(false)}>No</button>
        <button css={buttonStyle('add')} onClick={handleEdit} disabled={!collectionName}>Yes</button>
      </div>
    </Modal>
  )
}

export default ModalCollectionEditNameView