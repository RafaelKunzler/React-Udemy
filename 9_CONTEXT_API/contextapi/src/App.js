import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// css
import './App.css';

// components
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
