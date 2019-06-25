import React, { Component } from 'react'

class LearningRoute extends Component {
  componentDidMount(){
    (this.props.head === undefined) ? this.props.gameStart() : console.log('game started');
    console.log(this.props.head)
  }
  render() {
    let qWord = (this.props.head !== undefined) ? this.props.head.nextWord : false;
    let score = (this.props.head !== undefined) ? this.props.head.totalScore : false;
    let rAmount = (this.props.head !== undefined) ? this.props.head.wordCorrectCount : false;
    let wAmount = (this.props.head !== undefined) ? this.props.head.wordIncorrectCount : false;
    let guess = '';
    let test=false;
    let hTwo = "Translate the word:"

    if(this.props.response !== undefined){
      hTwo = '';

       test = (this.props.response) ? <>
    <h2>
    {`Good try, but not quite right :(`}
    </h2>
  <p className="DisplayScore">
  Your total score is: {this.props.response.totalScore}
  </p>
  <p className="DisplayFeedback">
    {`The correct translation for ${qWord} was ${this.props.response.answer} and you chose ${this.props.guess}!`}
  </p>
  <button>
      Try Another Word!
  </button>
  </>: false


    }





    let handleChange = (e) => {
          guess = e.target.value
    } 
    let handleSubmit = (e) => {
      e.preventDefault();
      // console.log(guess)
      this.props.submit(guess);
    }




  console.log(this.props)
  return (
      <section>
        <p className="DisplayScore">

        </p>
        implement and style me
     <div>
        <h2>
        {hTwo}
        </h2>
        <span>
        {qWord}
        </span>
     </div>
      <p>
        {`Your total score is: ${score}`}
      </p>
      {test}
      <div>
        <form 
        onSubmit={handleSubmit}
        >
        <label for={'learn-guess-input'}>
        What's the translation for this word?
          <input 
          required 
          id="learn-guess-input" 
          type="text" 
          name="guess-input"
          value={this.guess} 
          onChange={handleChange}
          />
        </label>
        <button type="submit">
        Submit your answer
        </button>
        </form>
      </div>
      
      <div>
        <div>
        You have answered this word correctly {rAmount} times.
        </div>
        <div>
        You have answered this word incorrectly {wAmount} times.
        </div>
      </div>
      </section>
      
    );
  


  //   if(this.props.response === undefined){
      
  //   }
  // if(this.props.response !== undefined){
  //   if(this.props.response.isCorrect){
  //     return (
  //       <section>
  //         <h2>
  //         {`Good try, but not quite right :(`}
  //         </h2>
  //       <p className="DisplayScore">
  //       Your total score is: {this.props.response.totalScore}
  //       <div>
  //         {`The correct translation for ${this.response.props.nextWord} was ${this.props.response.answer} and you chose ${this.props.guess}!`}
  //       </div>
  //       </p>
  //       </section>
  //     )
  //   }else{
  //     return (
  //       <section>
          
  //       </section>
  //     )
  //   }
  // }



  }
}

export default LearningRoute


// onSubmit={(e) => this.props.submit(e , value)}