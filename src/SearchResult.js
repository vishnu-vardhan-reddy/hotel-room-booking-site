import React from 'react'
import './searchresults.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star'
function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total
}) {
    return (
        <div className='searchresult'>
            <img src={img} alt=''/>
            <FavoriteBorderIcon className='searchResult__heart'/>
            <div className='searchresult__info'>
                <div className='searchresult__infoTop'>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_______</p>
                    <p>{description}</p>
                </div>
                <div className='searchresult__infoBottom'>
                    <div className='stars'>
                    <StarIcon className ='Searchresult__star'/>
                    <p>
                        <strong>{star}</strong>
                    </p>
                    </div>
                    <div className='searchresult__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
