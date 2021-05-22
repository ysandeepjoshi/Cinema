import React, { useState ,useEffect } from 'react'

import Search from './components/Search'
import Results from './components/Results'
import dummyData from './data/movies.json'
function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  useEffect(() => {
      setState(prevState => {
        return {...prevState, results : dummyData.movies}
      })
  }, []);

  const search = (e) => {
    if (e.key === "Enter") {
      //write axios code here to fetch data from backend.
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;
    
    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} />

        </main>
    </div>
  );
}

export default App