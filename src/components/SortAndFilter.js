import React from 'react'

function SortAndFilter ({ handleSort,handleLocation,handleLanguage,locationList,languageList }) {
    
	return (
		<section className="searchbox-wrap">
			<button className="close" onClick ={handleSort}>Sort Movies</button>
            Filter By Location : <select onChange={handleLocation}> {locationList.map((item)=>(
                <option value={item}>{item}</option>
            ))}</select>
            Filter By Language : <select onChange={handleLanguage}>{languageList.map((item)=>(
                <option value={item}>{item}</option>
            ))}</select>
		</section>
	)
}

export default SortAndFilter