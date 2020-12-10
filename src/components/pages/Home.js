import React, { Component } from 'react';
import "./Home.css"
import Herosecrion from "./Herosecrion"
import Cards from './Cards';

export class Home extends Component {
    render() {
        return (
            <>
            <Herosecrion/>
            <Cards/>
            
            </>
        )
    }
}

export default Home
