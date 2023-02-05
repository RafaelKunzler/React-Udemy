import './App.css';
import MyComponent from './components/MyComponent';

function App() {
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
    </div>
  );
}

export default App;
