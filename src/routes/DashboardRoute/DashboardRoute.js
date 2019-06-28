import React, { Component } from 'react'
import { relativeTimeRounding } from 'moment';
import './Dashboard.css'

class DashboardRoute extends Component {


  componentDidMount() {
    (this.props.sData === undefined) ? this.props.set() : console.log('false');
    console.log(this.props)
  }


  language() {
    return (this.props.sData !== undefined) ? this.props.sData.language.name : false;
  }

  score() {
    return (this.props.sData !== undefined) ? this.props.sData.language.total_score : false;
  }

  words() {
    return (this.props.sData !== undefined) ? this.props.sData.words.map((word, key) => {
      return (
        <li key={key} className='word-list-item'>
          <h4 className='word'>
            {word.original}
          </h4>
          <div className='count-container'>
            <p>{`Correct count: ${word.correct_count}`}</p>
            <p>{`Incorrect count: ${word.incorrect_count}`}</p>
          </div>
        </li>
      )
    }) : false;
  }
  render() {
    return (
      <section className='dashboard-section'>
        <div className='dashboard-header'>
  
            
              <h2 className='Language-title'>
                {this.language()}
              </h2>

     
          <div className='title-wrapper'>
            <a href="/learn">
              Start practicing
            </a>
          </div>
        </div>
        <section className='wordList-section'>
          <div className='word-col'>
          <div className="lHeader">
            <h3>
              scoreCards
            </h3>
            <div className="tScore">{`Total score: ${this.score()}`}</div>
          </div>
            <ul className='wordList' onClick={this.props.showMore}>
              {this.words()}
            </ul>
          </div>
        </section>
      </section>
    );
  }
}

export default DashboardRoute
