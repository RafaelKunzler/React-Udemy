import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';


import { useState } from 'react';

import './App.css';

function App() {
  //const name = "Joaquim"
  const [userName] = useState("Maria")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 8567},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234}
  ]

  function showMessage(){
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>      
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true}/>
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false}/>
      {/* loop em array */}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar}/>
      ))}
      {/* fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />    
    </div>
  );
}

export default App;
