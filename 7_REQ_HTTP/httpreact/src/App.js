import './App.css';

import { useState, useEffect } from "react"
// 4 custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);

  // 4 - custom hooks
  const { data: items, httpConfig, loading, error } = useFetch(url)

  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);

  const [itemUrl, setItemUrl] = useState([]);
  

  // 1 - resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  // add products
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // });

    // // 3 - carregamento dinâmico
    // const addProduct = await res.json();
    // setProducts((prevProducts) => [...prevProducts, addProduct]);

    // 5 - refatorando POST
    httpConfig(product, "POST")

    setName("");
    setPrice("");
  };

  const handleRemoveProduct = async (e) => {  
    console.log(e.target.id)
    e.preventDefault();     
    const res = url + "/" + e.target.id    
    httpConfig(res, "DELETE")    
    
  };


  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando Dados</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R${product.price}
            <button 
              onClick={handleRemoveProduct} 
              id={product.id}>
                Remover
            </button>
          </li>
        ))}
      </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input 
              type="text" 
              value={name}  
              name="name" onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Preço:
            <input 
              type="number" 
              value={price} 
              name="price" 
              onChange={(e) => setPrice(e.target.value)}/>
          </label>
          {/* 7 - state de loading no post */}
          {loading && <input type="submit" disabled value="Aguarde"/>}
          {!loading && <input type="submit" value="Criar"/>}
        </form>
      </div>
    </div>
  );
}

export default App;
