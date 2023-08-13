import './App.css'
import CreatePostPage from './pages/CreatePostPage'
import PostPage from './pages/PostPage'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* Используйте <Route index /> для указания маршрута по умолчанию */}
          <Route index element={<PostPage />} />
          <Route path='/create' element={<CreatePostPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
