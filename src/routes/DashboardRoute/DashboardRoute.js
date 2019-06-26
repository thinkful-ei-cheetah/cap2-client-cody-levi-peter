import React, { Component } from 'react'
import { relativeTimeRounding } from 'moment';
import './Dashboard.css'
import gravatar from 'react-gravatar'
import { timingSafeEqual } from 'crypto';
import { NavLink, } from 'react-router-dom';


class DashboardRoute extends Component {

  state = {
    wordList : [],
    itemsToShow: 5,
    expanded: false,
  }
  componentDidMount() {
    (this.props.sData === undefined) ? this.props.set() : console.log('false');
    console.log(this.props)
  }

  avatar(email) {
    return gravatar.url(email, { s: '100', r: 'x', d: 'retro', protocol: 'https' }, true);
  }

  renderWordList(arr){
    return arr.slice(0,this.state.itemsToShow).map((words , key) => {
      return (
        <li key={key} className='word-list-item'>
          <h4 className='word'>
            {words.original}
          </h4>
          <p>{`correct answer count: ${words.correct_count}`}</p>
          <p>{`incorrect answer count: ${words.incorrect_count}`}</p>
        </li>
      )
    })
  }
  showMore() {
      this.state.itemsToShow === 5 ? (
        this.setState({ itemsToShow: this.state.wordList.length, expanded: true })
      ) : (
          this.setState({ itemsToShow: 5, expanded: false })
        )
  }

  render() {
    let language = (this.props.sData !== undefined) ? this.props.sData.language.name : false;
    let score = (this.props.sData !== undefined) ? this.props.sData.language.total_score : false;
    // let words = (this.props.sData !== undefined) ? this.props.sData.words.map(word => {
    //     this.state.wordList.push(word)
    //  return  this.state.wordList }): false;
    console.log(this.state.wordList);
    console.log(this.state.itemsToShow)
    
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
//         <section className='wordList-section'>
//           <h3>
//             Words to practice
//           </h3>
//           <ul className='wordList' >
//             {this.renderWordList(this.state.wordList)}
//             <button className="Button" onClick={this.showMore()}>
//               {this.state.expanded ? (
//                 <span>Show less</span>
//               ) : (
//                   <span>Show more</span>
//                 )}
//             </button>
//           </ul>
//         </section>
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
