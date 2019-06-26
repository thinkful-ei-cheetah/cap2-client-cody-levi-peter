import React, { Component } from 'react'
import { relativeTimeRounding } from 'moment';
import { timingSafeEqual } from 'crypto';
import { NavLink, } from 'react-router-dom';

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
        <NavLink 
        to="/learn" 
        onClick={this.props.gameStart}
        >
          Start practicing
        </NavLink>
        <h3>
          {`Words to practice`}
        </h3>

        {words}
      </section>
    );
  }
}

export default DashboardRoute
