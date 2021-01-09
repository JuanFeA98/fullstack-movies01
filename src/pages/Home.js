import React from 'react';

import Header from '../components/Header'
import List from './List'

import '../styles/Home.css'

class Home extends React.Component{
    render(){
        return(
            <div className="Home">
                <Header/>
                <List/>
            </div>
        )
    }
}

export default Home