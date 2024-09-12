import './App.css';
import Greet from './components/Greet'
import Hello from './components/hello'

function App() {
  const data='i am haneena';
  const s='i am shanu'
  return (
    <div className="App">
      <Greet/>
      <Hello data={s} />
      <h1 style={{backgroundColor:'red'}}>hello world  {data}</h1>
    </div>
  );
}

export default App;
