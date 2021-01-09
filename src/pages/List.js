import React, {Component, useState} from 'react';

import Card from '../components/Card'

import '../styles/List.css'

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=eb5725d2'

class List extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            data: [],
            searchTerm: '',
            error: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // async componentDidMount(){
    //     const res = await fetch(`${API}&s=inuyasha`)
    //     const resJSON = await res.json()
    // };
    
       
    async handleSubmit(event){
        event.preventDefault();
        if(this.state.searchTerm === ""){
            return this.setState({error: 'Ingresa un termino de búsqueda valido'})
        } 

        const res = await fetch(`${API}&s=${this.state.searchTerm}`)
        const data = await res.json()

        if (!data.Search){
            return this.setState({error: 'No existen coincidencias'})
        } else {
            this.setState({data: []});
            this.setState({data: data.Search})
            return this.setState({error: ''})
        };
        

    };

    render(){
        return(
            <React.Fragment>
                <div className="Search">
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            className="FormList" 
                            placeholder="Search" 
                            onChange={e => {
                                this.setState({searchTerm: e.target.value})
                            }}
                            autoFocus/>
                    </form>
                    <p>{this.state.error ? this.state.error : ''}</p>
                </div>
                <div className="List">
                    {this.state.data.map((movie, i) => {
                        return (
                            <Card data={movie} key={i}/>
                        )
                    })}
                </div>
            </React.Fragment>)
    }
}

export default List