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
                            {`The correct translation for ${<span style={{color:'#007E33'}}>this.props.qWord</span>} was ${<span style={{color:'#007E33'}}>this.props.answer</span>}, you chose ${<span style={{color:'#ff4444'}}>this.props.guess</span>}.`}
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