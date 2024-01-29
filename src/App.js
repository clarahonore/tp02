import logo from './logo.svg';
import './App.css';
import Quote from './Quote/Quote.js'


function App() {
  return (
    <div className="App">
      <h1>
        Mes citations !
      </h1>
      <div className="App">
        <Quote text="Elementary, my dear Watson" author="Sherlock Holmes"/>
      </div>
    </div>
  );
}
 
export default App;
