import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// components
import Navegation from './layout/Navegation.tsx'
import ListProductView from './pages/ListProductView.tsx'
import Home from './pages/home.tsx'
// import SaveProduct from './pages/SaveProduct.tsx'
import CreateProduct from './pages/CreateProduct.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Navegation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ListProductView />} />
        <Route path="/crear-producto" element={< CreateProduct />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  </StrictMode>
)
