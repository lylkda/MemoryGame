import React from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import Wrapper from "../Wrapper";
import Footer from "../Footer";
import Card from "../Card";
import cards from "../../cards.json";


class Container extends React.Component { 
  state = {
    count: 0,
    topCount: 0,
    clicked: {},
    detail: ""
  };

  componentDidMount(){
    this.setState({
      detail: "Click on an image to begin!"
    })
  }

  handleClick = (id) => {
    if (this.state.clicked[id]){
      this.setState({
        count: 0,
        clicked: {},
        detail: "You guessed incorrectly!"
      })
      if (this.state.count >= this.state.topCount){
        this.setState({
          topCount: this.state.count
        })
      }
    }
    else{
      this.setState({
        count: this.state.count+1,
        detail: "You guessed correctly!"
      })
      this.state.clicked[id] = true;
      if (this.state.count >= this.state.topCount){
        this.setState({
          topCount: this.state.count+1
        })
      }
    }
    console.log(this.state)
  }

  render() {
    return (
      <div className="game">
      <Navbar detail={this.state.detail} score={this.state.count} topScore={this.state.topCount}/>
      <Header />
      <Wrapper>
        <Card cards={cards} handleClick={this.handleClick} />
      </Wrapper>
      <Footer />
      </div>
    )
  }
}
export default Container;
