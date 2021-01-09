import React, {Component} from 'react';

import '../styles/Header.css'

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <img src="https://www.flaticon.com/svg/static/icons/svg/3163/3163478.svg" alt="Movies"/>
                <p>Movies</p>
            </div>
        )
    }
}

export default Header