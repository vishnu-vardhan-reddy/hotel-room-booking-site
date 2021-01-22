import React from 'react'
import './home.css'
import Banner from './Banner'
import Card from './Card'


function Home() {
    return (
        <div className='home'>
            
            <Banner />
            <div className='home__section'>
                <Card 
                    src='https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    title='Online Experiences'
                    description='Unique activities we can do togeher , led by a world of hosts'
                />
                <Card  
                    src='https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    title ='Unique stays'
                    description='Spaces that are more than just a place to sleep'
                />
                <Card 
                    src='https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    title='Entire Homes'
                    description="Comfortable private places , with room for friends & family"
                />
                 <Card 
                    src='https://images.pexels.com/photos/26139/pexels-photo-26139.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    title='Entire Homes'
                    description="Comfortable private places , with room for friends & family"
                />
                 <Card 
                    src='https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    title='Entire Homes'
                    description="Comfortable private places , with room for friends & family"
                />
                 <Card 
                    src='https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    title='Entire Homes'
                    description="Comfortable private places , with room for friends & family"
                />
                <Card 
                     src='https://images.pexels.com/photos/3201735/pexels-photo-3201735.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                     title='Entire Homes'
                     description='Comfortable private places , with room for friends & family'
                />
                 <Card 
                     src='https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                     title='Entire Homes'
                     description='Comfortable private places , with room for friends & family'
                />
                 <Card 
                     src='https://images.pexels.com/photos/4355543/pexels-photo-4355543.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                     title='Entire Homes'
                     description='Comfortable private places , with room for friends & family'
                />
                 <Card 
                     src='https://images.pexels.com/photos/3771833/pexels-photo-3771833.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                     title='Entire Homes'
                     description='Comfortable private places , with room for friends & family'
                />
            </div>
        </div>
    )
}

export default Home
