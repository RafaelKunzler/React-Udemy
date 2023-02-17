import './App.css';

import { useFetch } from './hooks/useFetch';

// components
import Navbar from './components/Navbar';

// 1 - config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';

const url = "http://localhost:3000/products"

function App() {
  const { data: items} = useFetch(url);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>      
      <BrowserRouter>
          {/*2 - links com react router*/}
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* 6 - nested route*/}
            <Route path='/products/:id/info' element={<Info />} />
            {/* 4 - rota dinamica*/}
            <Route path='/products/:id' element={<Product />} />
            {/* 7- no match route */}
            <Route path="*" element={<NotFound />} />

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;