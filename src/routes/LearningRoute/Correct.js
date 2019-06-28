import React, { Component } from 'react'

export default class Correct extends Component {

    render() {

        return(
        <>
           <div className="correct">
                <div>
                    <h2>
                        {`Correct!`}
                    </h2>
                    <div className="DisplayScore">
                        <p>
                            Total score: {this.props.totalScore}
                        </p>
                    </div>
                    <div className="DisplayFeedback">
                        <p>
                            {`The correct translation for ${<span style={{color:'#007E33'}}>this.props.qWord</span>} was ${<span style={{color:'#007E33'}}>this.props.guess</span>}!`}
                        </p>
                    </div>
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

