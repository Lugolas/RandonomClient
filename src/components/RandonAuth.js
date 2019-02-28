import React, { Component } from "react";
import Auth from './Auth';

class RandonAuth extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogged: false,
            userName: ""
        };
    }

    onClick = () =>{
        const auth = new Auth();
        auth.login();
    }

    render(){
        return this.state.isLogged === true ? this.state.userName : "Se connecter";
    }
}

export default RandonAuth;