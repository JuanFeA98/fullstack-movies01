import React, {Component} from 'react';

import Card from '../components/Card'

import '../styles/List.css'

class List extends Component{
    
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    async componentDidMount(){
        const res = await fetch('../../assets/data.json');
        const resJSON = await res.json()
        this.setState({data: resJSON})
    };
    
    render(){
        return this.state.data.map(movie => {
            return (
                <div className="List">
                    <h1>Prueba</h1>
                    <Card data={movie}/>
                </div>
            )
        })
    }
}

export default List