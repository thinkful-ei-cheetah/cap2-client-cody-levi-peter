import React, { Component } from 'react'

class LearningRoute extends Component {
  componentDidMount(){
    (this.props.head === undefined) ? this.props.gameStart() : console.log('false');
    console.log(this.props.head)
  }
  render() {

    let qWord = (this.props.head !== undefined) ? this.props.head.nextWord : false;
    let score = (this.props.head !== undefined) ? this.props.head.totalScore : false;
    
    return (
      <section>
        implement and style me
     <div>
        <h2>
        Translate the word:
        </h2>
        <span>
        {qWord}
        </span>
     </div>
      <p>
        {`Your total score is: ${score}`}
      </p>

      <div>
        <form>
        <label for={'learn-guess-input'}>
        What's the translation for this word?
          <input required id="learn-guess-input" type="text" />
        </label>
        <button type="submit">
        Submit your answer
        </button>
        </form>
      </div>
      </section>
    );
  }
}

export default LearningRoute
