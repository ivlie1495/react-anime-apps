import { Route, Routes } from 'react-router-dom'
import AnimeList from './anime/list'
import AnimeDetail from './anime/detail'
import CollectionList from './collection/list'
import CollectionDetail from './collection/detail'

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<AnimeList />} />
      <Route path="/anime/detail/:id" element={<AnimeDetail />} />
      <Route path="/collection" element={<CollectionList />} />
      <Route path="/collection/:name" element={<CollectionDetail />} />
    </Routes>
  )
}

export default Pages