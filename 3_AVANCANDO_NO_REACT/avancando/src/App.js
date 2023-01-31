import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>      
      <ManageData />
      <ListRender />
      <ConditionalRender />
    </div>
  );
}

export default App;
