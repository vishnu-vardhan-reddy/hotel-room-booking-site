import React from 'react'
import './searchpage.css'
import { Button } from '@material-ui/core'
import './searchpage.css'
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className='searchpage'>
            <div className='searchpage__info'>
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant='outlined'>Cancellation Flexibility</Button>
                <Button variant='outlined'>Type of place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and Beds</Button>
                <Button variant='outlined'>More Filters</Button>

            </div>
            <SearchResult 
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU'
                location='Private room in center of London'
                title='Stay at this spacious Edwardian House'
                description='1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine'
                star='4.73'
                price='£30 / night'
                total='£117 total'
            />
            <SearchResult 
                img='https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg'
                location='Private room in center of London'
                title='Independant luxury studio apartment'
                description='2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen'
                star='4.3'
                price='£40 / night'
                total='£157 total'
            />
              <SearchResult 
                img='https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg'
                location='Private room in center of London'
                title='30 mins to Oxford Street, Excel London'
                description='1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine'
                star='4.1'
                price='£60 / night'
                total='£450 total'
            />
              <SearchResult 
                img='https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937'
                location='Private room in center of London'
                title='5 Star Luxury Apartment'
                description='5 Star Luxury Apartment3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine'
                star='3.75'
                price='£90 / night'
                total='£650 total'
            />
              {/* <SearchResult 
                img=''
                location=''
                title=''
                description=''
                star=''
                price=''
                total=''
            />
              <SearchResult 
                img=''
                location=''
                title=''
                description=''
                star=''
                price=''
                total=''
            /> */}
        </div>
    )
}

export default SearchPage
