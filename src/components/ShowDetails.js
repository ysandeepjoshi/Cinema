import React from 'react'

function Popup({ selected, closePopup }) {
    return (
        <section className="popup">
            <div className="content">
                <h2>{selected.Title} <span>({selected.listingType.replaceAll('_', " ")})</span></h2>

                <p className="rating">Rating: {selected.imdbRating}</p>
                <div className="plot">
                    <img src={selected.Poster} alt="No Poster Found" />
                    <p>Plot <span>{selected.Plot}</span>
                    </p>
                    </div>
                    <div className="location">
                        <div><span>Location: {selected.Location}</span>
                        <div>
                        <span>Language: {selected.Language}</span></div>
                        </div>   
                   </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}

export default Popup