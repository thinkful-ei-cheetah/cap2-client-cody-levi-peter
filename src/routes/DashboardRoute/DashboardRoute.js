import React, { Component } from 'react'
import { relativeTimeRounding } from 'moment';
import './Dashboard.css'

class DashboardRoute extends Component {
  componentDidMount() {
    (this.props.sData === undefined) ? this.props.set() : console.log('false');
    console.log(this.props)
  }
  render() {
    let language = (this.props.sData !== undefined) ? this.props.sData.language.name : false;
    let score = (this.props.sData !== undefined) ? this.props.sData.language.total_score : false;
    let wordobj = []
    let words = (this.props.sData !== undefined) ? this.props.sData.words.map(word => {
      wordobj.push(word);
      return wordobj
    }) : false;
    let condition = wordobj.slice(0, 5)
    return (
      <section className='dashboard-section'>
        <div className='dashboard-header'>
          <h2 className='Language-title'>
            Learning {language}
          </h2>
          <div className='title-wrapper'>
            <p>{`Total correct answers: ${score}`}</p>
            <a href="/learn">
              Start practicing
            </a>
          </div>
        </div>
        <section className='wordList-section'>
          <h3>
            Words to practice
          </h3>
          <ul className='wordList'>
            {condition.map(words => {
              return (
                <li className='word-list-item'>
                  <h4 class='word'>
                    {words.original}
                  </h4>
                  <p>{`correct answer count: ${words.correct_count}`}</p>
                  <p>{`incorrect answer count: ${words.incorrect_count}`}</p>
                </li>
              )
            })}
          </ul>
        </section>
      </section>
    );
  }
}

export default DashboardRoute
