import logo from './logo.svg';
import './App.css';
import Quote from './Quote/Quote.js';
import {getQuotes} from './Data/data.js';
import AllQuotes from './AllQuotes/AllQuotes.js'

function App() {

  return (
    <div className="App">
      <h1>Mes citations !</h1>
     <AllQuotes quotes={getQuotes()}/>
    </div>
  );
}
 
export default App;
