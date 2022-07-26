import { useQuery } from '@apollo/client'
import { useState } from 'react'

import { ANIME_LIST } from '../../../graphql/query'
import AnimeListView from './AnimeListView'

const AnimeListContainer = () => {
  const [ page, setPage ] = useState(1)
  const { loading, data, error } = useQuery(ANIME_LIST, {
    variables: {
      page: page,
      perPage: 12,
    }
  })

  const handleChangePage = (index) => {
    const totalPage = data?.Page?.total || 0
    if (index > 0 || index < totalPage) {
      setPage(index)
    }
  }

  return (
    <AnimeListView 
      loading={loading} 
      error={error} 
      data={data?.Page} 
      handleChangePage={handleChangePage}
    />
  )
}

export default AnimeListContainer