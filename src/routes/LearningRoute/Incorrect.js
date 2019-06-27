import React, { Component } from 'react'

export default class Incorrect extends Component {

    render() {

        return(
            <>
            <div className="incorrect">
                <div>
                    <h2>
                        {`Incorrect!`}
                    </h2>
                        <p className="DisplayScore">
                            Your total score is: {this.props.totalScore}
                        </p>
                        <p className="DisplayFeedback">
                            {`The correct translation for ${this.props.qWord} was ${this.props.answer}, you chose ${this.props.guess}.`}
                        </p>
                </div>
               <div>
                    <button onClick={this.props.next} className="nButton">
                        &#62;
                    </button>
               </div>
            </div>
          </>
        )
    }
}