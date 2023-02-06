import './App.css';
import CarDetails from './components/CarDetails';

import Ferrari from './assets/ferrari.jpeg';
import Mustang from './assets/mustang.jpeg';
import Marea from './assets/marea.jpg';

function App() {

  const cars = [
    {id: 1, brand: "Ferrari SF90", color: "Vermelha", year: "2017", price: 5990000, img: Ferrari},
    {id: 2, brand: "Ford Mustang", color: "Laranja", year: "2022", price: 599990, img: Mustang },
    {id: 3, brand: "Fiat Marea", color: "Prata", year: "2001", price: 36000, img: Marea },
  ]
  return (    
    <div className="App">
      <div className="Title">
        <h1>Carros Disponiveis</h1>
      </div>
      <div className="Cards">
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            year={car.year}
            price={car.price}
            img={car.img}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
