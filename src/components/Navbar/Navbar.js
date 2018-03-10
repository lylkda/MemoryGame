import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navbar extends React.Component {


    render() {
        return (
            <nav className="navbar fixed-top navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand headtxt" href="/">Memory Game</a>
                    <div className="headtxt">{this.props.detail}</div>
                    <div className="headtxt" >Score: {this.props.score} | Top Score: {this.props.topScore}</div>
                </div>
            </nav>
            );
    }
}


export default Navbar;
