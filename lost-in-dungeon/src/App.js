import React from 'react';
import JogoPage from './views/telaJogo/JogoPage';
import './css/App.css';
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <JogoPage fasesTotais={5} />
      </div>
    );
  }
}

export default App; 
