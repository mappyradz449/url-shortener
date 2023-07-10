import './App.css';
import UrlShortener from './UrlShortener';
import Link from './Link';
import { useState } from 'react';

function App() {
  const [inputVal, setInputVal] = useState("");

  return (
    <div className="App">
      <UrlShortener setInputVal={setInputVal}/>
      <Link inputVal={inputVal}/>
    </div>
  );
}

export default App;
