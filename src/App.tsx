import './App.css';
import { Declare } from './components/Declare';
import { SetStateValue } from './components/SetStateValue';
import { SetStateValueForArray } from './components/SetStateValueForArragy';
import { SetStateValueForObject } from './components/SetStateValueForObject';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Usare useState</h1>
      </header>
      <main className='App-main'>
        <Declare />
        <SetStateValue />
        <SetStateValueForObject />
        <SetStateValueForArray />
        
      </main>
    </div>
  );
}

export default App;
