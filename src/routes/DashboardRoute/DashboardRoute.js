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
    let words = (this.props.sData !== undefined) ? this.props.sData.words.map(word => {
      return (
        <li>
          <h4>
            {word.original}
          </h4>
          {`correct answer count: ${word.correct_count}`}
          {`incorrect answer count: ${word.incorrect_count}`}
        </li>
      )
    }) : false;
    // let session = {...this.props.sData}
    return (
      <section>
        {console.log(language)}
        implement and style me
        <h2>
          title mane {language}
        </h2>
        {`Total correct answers: ${score}`}
        <div>
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
