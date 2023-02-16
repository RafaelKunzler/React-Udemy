import './App.css';
import { useFetch } from './hooks/useFetch';

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
    </div>
  );
}

export default App;
