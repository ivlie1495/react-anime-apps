import { createContext, useState } from 'react'
import { COLLECTION_KEY } from '../../../constants/collections';
import CollectionListView from './CollectionListView'

export const CollectionListContext = createContext();

const CollectionContainer = () => {
  const [ collectionName, setCollectionName ] = useState('')
  const [ collectionNameEdit, setCollectionNameEdit ] = useState('')
  const [ snackbarMessage, setSnackbarMessage ] = useState('')

  const [ showModalDelete, setShowModalDelete ] = useState(false)
  const [ showModalAdd, setShowModalAdd ] = useState(false)
  const [ showModalEdit, setShowModalEdit ] = useState(false)
  const [ successMessage, setSuccessMessage ] = useState(false)

  const localStorageItems = Object.keys(localStorage)

  const handleShowModalDelete = (event, value) => {
    if (event) {
      event.preventDefault()
    }
    
    if (value) {
      setShowModalDelete(true)
      setCollectionName(value)
    } else {
      setShowModalDelete(false)
      setCollectionName('')
    }
  }

  const handleDelete = () => {
    const collections = JSON.parse(localStorage.getItem(COLLECTION_KEY) || '[]')
    const newCollections = collections.filter((item) => item.collectionName !== `anime-${collectionName}`)

    localStorage.removeItem(`anime-${collectionName}`)
    localStorage.setItem(COLLECTION_KEY, JSON.stringify(newCollections))

    setShowModalDelete(false)
    setCollectionName('')
    setSnackbarMessage('Success')

    setSuccessMessage(true)
    setTimeout(() => setSuccessMessage(false), 2000)
  }

  const handleShowModalAdd = (value) => {
    setShowModalAdd(value)
    setCollectionName('')
  }

  const handleAdd = () => {
    const collection = localStorage.getItem(`anime-${collectionName}`)

    if (collection) {
      setSnackbarMessage('Collection name already exist')
    } else {
      localStorage.setItem(`anime-${collectionName}`, JSON.stringify([]))
      setSnackbarMessage('Success')
    }

    setShowModalAdd(false)
    setSuccessMessage(true)
    setTimeout(() => setSuccessMessage(false), 2000)
  }

  const handleShowModalEdit = (event, value) => {
    if (event) {
      event.preventDefault()
    }
    
    if (value) {
      setShowModalEdit(true)
      setCollectionName(value)
      setCollectionNameEdit(value)
    } else {
      setShowModalEdit(false)
      setCollectionName('')
      setCollectionNameEdit('')
    }
  }

  const handleEdit = () => {
    const collection = localStorage.getItem(`anime-${collectionName}`)

    if (collection) {
      setSnackbarMessage('Collection name already exist')
    } else {
      const collectionItems = JSON.parse(localStorage.getItem(COLLECTION_KEY) || '[]')
      const newCollectionItems = collectionItems.map((item) => {
        if (item.collectionName === `anime-${collectionNameEdit}`) {
          return {
            ...item,
            collectionName
          }
        }

        return item
      })

      localStorage.setItem(COLLECTION_KEY, JSON.stringify(newCollectionItems))
      localStorage.setItem(`anime-${collectionName}`, localStorage.getItem(`anime-${collectionNameEdit}`) || JSON.stringify([]))
      localStorage.removeItem(`anime-${collectionNameEdit}`)
      setSnackbarMessage('Success')
    }

    setShowModalEdit(false)
    setSuccessMessage(true)
    setTimeout(() => setSuccessMessage(false), 2000)
  }

  return (
    <CollectionListContext.Provider
      value={{
        items: localStorageItems.filter((item) => item.startsWith('anime')).map((item) => item.replace('anime-', '')),
        showModalDelete,
        handleShowModalDelete,
        handleDelete,
        collectionName,
        setCollectionName,
        successMessage,
        snackbarMessage,
        showModalAdd,
        handleShowModalAdd,
        handleAdd,
        showModalEdit,
        handleShowModalEdit,
        handleEdit
      }}
    >
      <CollectionListView />
    </CollectionListContext.Provider>
  )
}

export default CollectionContainer