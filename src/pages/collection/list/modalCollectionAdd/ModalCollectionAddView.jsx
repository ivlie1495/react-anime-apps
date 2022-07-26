/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useContext } from 'react'

import Modal from '../../../../components/modal'
import { inputCollectionTextStyle } from '../../detail/collectionDetailStyle'

import { CollectionListContext } from '../CollectionListContainer'
import { buttonStyle, footerModalStyle } from './modalCollectionAddStyle'

const ModalCollectionAddView = () => {
  const {
    handleAdd,
    handleShowModalAdd,
    collectionName,
    setCollectionName
  } = useContext(CollectionListContext)

  return (
    <Modal title="Add New Collection" handleClose={() => handleShowModalAdd(false)}>
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
        <button css={buttonStyle()} onClick={() => handleShowModalAdd(false)}>No</button>
        <button css={buttonStyle('add')} onClick={handleAdd} disabled={!collectionName}>Yes</button>
      </div>
    </Modal>
  )
}

export default ModalCollectionAddView