import React, { Component } from 'react'
import Incorrect from './Incorrect';
import Correct from './Correct';
import { Spring } from 'react-spring/renderprops';

import './Learn.css'

class LearningRoute extends Component {
  componentDidMount() {
    (this.props.head === undefined) ? this.props.gameStart() : console.log('game started');
    console.log(this.props.head)
  }
  render() {
    let qWord = (this.props.head !== undefined) ? this.props.head.nextWord : false;
    let score = (this.props.head !== undefined) ? this.props.head.totalScore : false;
    let rAmount = (this.props.head !== undefined) ? this.props.head.wordCorrectCount : false;
    let wAmount = (this.props.head !== undefined) ? this.props.head.wordIncorrectCount : false;
    let guess = '';
    let test = false;

    let handleChange = (e) => {
      guess = e.target.value
    }
    let handleSubmit = (e) => {
      e.preventDefault();
      this.props.submit(guess);
    }

    let learning = <>
      <div className="qHead">
        <h2>
          Translate:
        </h2>
        <span className="word">
          {qWord}
        </span>
      <div className="scoreCard">
        {`score: ${score}`}
      </div>
      </div>
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
      >
      {props => (
        <div style={props}>
        <div className="formBin">
          <div>
            <form
              onSubmit={handleSubmit}
              className="learnForm"
              >

              {/* <label for={'learn-guess-input'}>
                What's the translation for this word?
                </label> */}

              <input
              className="tInput"
                  required
                  id="learn-guess-input"
                  type="text"
                  name="guess-input"
                  value={this.guess}
                  onChange={handleChange}
                  placeholder="Translation?"
                />
              <button type="submit" className="tSubmit">
                {/* Submit */}
                &#62;
            </button>
            </form>
          </div>
        </div>
        <div className="wScore">
          <div>
            Answered correctly {rAmount} times.
          </div>
          <div>
            Answered incorrectly {wAmount} times.
          </div>
        </div>
        </div>
      )}
    </Spring>
    </>


    if (this.props.response !== undefined) {
      learning = null;
      test = (this.props.response.isCorrect === false) ? <Incorrect totalScore={this.props.response.totalScore} qWord={qWord} answer={this.props.response.answer} guess={this.props.guess} next={this.props.next}
      /> : <Correct totalScore={this.props.response.totalScore} qWord={qWord} answer={this.props.response.answer} guess={this.props.guess} next={this.props.next} />
    }



    console.log(this.props)
    return (
      <section >
        <Spring
          from={{ opacity: 0, marginTop: -500 }}
          to={{ opacity: 1, marginTop: 0 }}
        >
          {props => (
            <div style={props}>
              {learning}
            </div>
          )}
        </Spring>

        {test}
      </section>
    );
  }
}

export default LearningRoute
