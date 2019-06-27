import React, { Component } from 'react'

export default class Correct extends Component {

    render() {

        return(
        <>
            <h2>
                {`You were correct! :D`}
            </h2>
            <div className="DisplayScore">
                <p>
                    Your total score is: {this.props.totalScore}
                </p>
            </div>
            <div className="DisplayFeedback">

                <p>
                    {`The correct translation for ${this.props.qWord} was ${this.props.answer} and you chose ${this.props.guess}!`}
                </p>
            </div>
            <button onClick={this.props.next}>
                Try another word!
        </button>
        </>
        )
    }
}

