import React, { useState ,useEffect } from 'react'

import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/ShowDetails'


import dummyData from './data/movies.json'
import SortAndFilter from './components/SortAndFilter'





function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
    originalresult : [],
    sort : false,
    location: ["All",...new Set(dummyData.movies.map((item)=>item.Location))],
    language: ["All",...new Set(dummyData.movies.map((item)=>item.Language))],
  });
  

  useEffect(() => {
      setState(prevState => {
        return {...prevState, results : dummyData.movies,originalresult:dummyData.movies}
      })
  }, []);

  const search = (e) => {
    if (e.key === "Enter") {
      //write axios code here to fetch data from backend.
      let results = dummyData.movies.filter((item)=> item.Title.toLowerCase().includes(state.s));
      setState(prevState => {
        return { ...prevState, results: results, originalresult: results }
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
  const handleLanguageFilter = (e) =>{
    let language = e.target.value;
    let filteredMovies = state.originalresult
    if(language === 'All'){
    }else{
    filteredMovies = state.results.filter((movie)=>movie.Language===language)
    }
    setState(prevState => {
      return { ...prevState, results: filteredMovies }
    });
  }
  const handleLocationFilter = (e) =>{
    let location = e.target.value;
    let filteredMovies = state.originalresult;
    if(location === 'All'){
    }else{
    filteredMovies = state.results.filter((movie)=>movie.Location===location)
    }
    setState(prevState => {
      return { ...prevState, results: filteredMovies }
    });
  }
  const handleSort = (e) =>{
    setState(prevState =>{
      return {...prevState, sort: !prevState.sort}
    })
    let filteredMovies = state.filteredMovies;
    if(state.sort){
      filteredMovies = state.results.sort((a,b)=>b.Title.localeCompare(a))
    }
    else{
      filteredMovies = state.results.sort((a,b)=>a.Title.localeCompare(b))
      }
      setState(prevState => {
        return { ...prevState, results: filteredMovies }
      });
 
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <SortAndFilter handleSort ={handleSort} handleLocation={handleLocationFilter}
        handleLanguage={handleLanguageFilter} 
        locationList ={state.location}
        languageList ={state.language} />

        <Results results={state.results}  openPopup  ={openPopup}/>
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
        </main>
    </div>
  );
}

export default App