import React, { Component } from 'react'

export default class Incorrect extends Component {

    render() {

        return(
            <>
            <div className="incorrect">
                <div>
                    <h2>
                        <span style={{color:'#ff4444'}}>Incorrect!</span>
                    </h2>
                        <p className="DisplayScore">
                            Your total score is: {this.props.totalScore}
                        </p>
                        <p className="DisplayFeedback">
                            The correct translation for <b><span style={{color:'#007E33'}}>{this.props.qWord}</span></b> was <b><span style={{color:'#007E33'}}>{this.props.answer}</span></b>, you chose <b><span className='incorrect-input' style={{color:'#ff4444', display:'inline-block', verticalAlign: 'bottom', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{this.props.guess}</span></b>.
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