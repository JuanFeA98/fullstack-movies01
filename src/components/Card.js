import React, {Component} from 'react';

import '../styles/Card.css';

class Card extends Component{
    render(){
        return(
            <div className="Card">
                <img className="Card__Img" src={this.props.data.Poster} alt={this.props.data.Title}/>
                <h4 className="Card__Title">{this.props.data.Title}</h4>
                <p className="Card__Year">{this.props.data.Year}</p>
                <p className="Card__Type">{this.props.data.Type}</p>
            </div>
        )
    }
}

export default Card