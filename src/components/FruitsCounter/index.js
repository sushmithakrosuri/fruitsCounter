// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  eatMangoes = () => {
    // const {mangoes} = this.state
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  eatBananas = () => {
    // const {bananas} = this.state
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="card">
        <h1>
          Bob ate<span> {mangoes} </span>mangoes<span> {bananas} </span>bananas
        </h1>
        <div className="fruitsContainer">
          <div className="fruitContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <button onClick={this.eatMangoes}>Eat Mangoes</button>
          </div>
          <div className="fruitContainer">
            <img
              alt="banana"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            />
            <button onClick={this.eatBananas}>Eat Bananas</button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
