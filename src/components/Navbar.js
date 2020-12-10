import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Menuitem from "./menuitems";
import "./Navbar.css"

class Navbar extends Component {
    state = {
        clicked :false
    }

    handelclick = () => {
        this.setState({clicked : !this.state.clicked})
    }
    closemobilemenu = () =>{
        this.setState({clicked:false})
    }

    render() {
        return(
            <nav className="navbar">
                <h1 className="logo" onClick={this.closemobilemenu}>React<i className="fab fa-react" ></i></h1>
                <div className="menu-icon" onClick={this.handelclick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {Menuitem.map((item, index) => {
                        return(
                        <li key={index} >
                            <Link to={item.url} className={item.cName}>{item.title}</Link>
                        </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }
}
export default Navbar;