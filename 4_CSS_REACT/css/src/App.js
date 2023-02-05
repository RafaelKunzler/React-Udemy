import './App.css';

import MyComponent from './components/MyComponent';
import Title from './components/Title';

import {useState} from 'react';

function App() {

  const n = 15;
  const [name] = useState("Rafael")

  const redTitle = false;

  return (
    <div className="App">
      {/* css global */}
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este paragrafo é o app.js</p>
      {/* inline css */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>
        Este elemento foi estilizado de forma inline
      </p>
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* inline css dinamico */}
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>
        css dinamico
      </h2>
      <h2 style={name === "Rafael" ? ({color: "green", backgroundColor: "#000"}) : (null)}>
        Teste nome      
      </h2>
      {/* classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo vai ter classe dinamica
      </h2>
      {/* CSS module */}
      <Title />
      <h2 className='my_title'>Testando</h2>
    </div>
  );
}

export default App;
