import React, { Component } from 'react'

export default class Incorrect extends Component {

    render() {

        return(
            <>
            <h2>
                {`Good try, but not quite right :(`}
            </h2>
                <p className="DisplayScore">
                    Your total score is: {this.props.totalScore}
                </p>
                <p className="DisplayFeedback">
                    {`The correct translation for ${this.props.qWord} was ${this.props.answer} and you chose ${this.props.guess}!`}
                </p>
                <button onClick={this.props.next}>
                    Try another word!
            </button>
          </>
        )
    }
}