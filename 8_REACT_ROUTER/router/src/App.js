import './App.css';

import { useFetch } from './hooks/useFetch';

// components
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import About from './pages/About';

// 1 - config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const url = "http://localhost:3000/products"

function App() {
  const { data: items} = useFetch(url);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - R${product.price}
            </li>
          ))}
      </ul>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
