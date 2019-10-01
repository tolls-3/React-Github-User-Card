import React from 'react';

export default class User extends React.Component{
    constructor(props){
        //debugger;
        super(props);
        console.log(props)
    }
    render(){
        return(
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.login}</p>
                <img src={this.props.picture} alt="Tolu"/>

            </div>
        )
    }
}