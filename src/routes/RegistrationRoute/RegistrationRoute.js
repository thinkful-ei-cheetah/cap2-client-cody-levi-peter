import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

import { Spring } from 'react-spring/renderprops'

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className='registrationForm-wrapper'>


        <section className='registration-section'>

          {/* ?----------------------------------- */}
          <Spring
            from={{ opacity: 0, transform: "translate(100%, 0)" }}
            to={{ opacity: 1, transform: "translate(0%, 0)" }}
          >
            {props => (
              <div style={props}>
                <p>
                  Practice a language with spaced reptition.
        </p>
                <h2>Sign up</h2>
              </div>
            )}
          </Spring>

          {/* <p>
            Practice a language with spaced reptition.
        </p>
          <h2>Sign up</h2> */}


          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </section>


      </section>



    );
  }
}

export default RegistrationRoute


