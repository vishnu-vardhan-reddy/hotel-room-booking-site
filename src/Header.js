import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {IconButton} from '@material-ui/core'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
           <Link to='/'>
               <img className='header__icon'
                     src='https://img.pngio.com/airbnb-logo-transparent-png-stickpng-airbnb-logo-png-2000_625.png'
                     alt=''
                />
           </Link>
            <div className='header__center'>
                <input className='header__input' type='text'  />
                <SearchIcon className='header__searchIcon'/>
            </div>
            <div className='header__right'>
                <p>become a Host</p>
                <IconButton><LanguageIcon /></IconButton>
                <IconButton><ExpandMoreIcon /></IconButton>
                <IconButton>  <AccountCircleIcon /></IconButton>
            </div>
        </div>
    )
}

export default Header
