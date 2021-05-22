import React, { useState ,useEffect } from 'react'

import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/ShowDetails'


import dummyData from './data/movies.json'





function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  
  const [sortState, setSortState] = useState(true);

  useEffect(() => {
      setState(prevState => {
        return {...prevState, results : dummyData.movies}
      })
  }, []);

  const search = (e) => {
    if (e.key === "Enter") {
      //write axios code here to fetch data from backend.
      let results = dummyData.movies.filter((item)=> item.Title.toLowerCase().includes(state.s));
      setState(prevState => {
        return { ...prevState, results: results }
      })
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }
  //showDetails
  const openPopup = id => {
      let result = dummyData.movies.filter((item)=> item.imdbID ===id);

      setState(prevState => {
        return { ...prevState, selected: result[0] }
      });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }


  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results}  openPopup  ={openPopup}/>
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
        </main>
    </div>
  );
}

export default App