// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The button has been clicked <span className="number">{count}</span>
          Times
        </h1>
        <p className="para">click the button to increase the count</p>
        <button className="button" onClick={this.onIncrement} type="button">
          Click Me
        </button>
      </div>
    )
  }
}
export default ClickCounter
