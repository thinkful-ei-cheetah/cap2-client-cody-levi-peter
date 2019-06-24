import React, { Component } from 'react'

class DashboardRoute extends Component {
    componentDidMount(){
        //this.props.set();
        console.log(this.props)
    }

  render() {
    let language = (this.props.sData)? this.props.sData.language: false;
    // let session = {...this.props.sData}
    return (
      <section>
        {console.log(language)}
        implement and style me
        <h2>
        title mane {language}
        </h2>
        <div>
          {/* {this.props.sData.language.total_score}
          {this.props.sData.words} */}
        </div>
      </section>
    );
  }
}

export default DashboardRoute
