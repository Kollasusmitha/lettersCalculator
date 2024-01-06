// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  updateLetterCount = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you Enter</h1>
            <div className="input-phrase-container">
              <label htmlFor="input" className="label">
                Enter the phrase
              </label>
              <input
                id="input"
                className="class-input"
                type="text"
                placeholder="Enter the Phrase"
                onChange={this.updateLetterCount}
              />
            </div>
            <p className="letters-count">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            className="letters-calculator-image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
