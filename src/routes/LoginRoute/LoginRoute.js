import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

import { Spring } from 'react-spring/renderprops'

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
    this.props.set();
  }

  render() {
    return (
      <section className='login-wrapper'>
        <section className='login-section' >



          <Spring
            // from={{ opacity: 0, }}
            // to={{ opacity: 1, }}
            from={{ opacity: 0, transform: "translate(-100%, 0)" }}
            to={{ opacity: 1, transform: "translate(0%, 0)" }}

            // config={{duration:700}}
          >
            {props => (
              <div style={props}>
                <h2>Login</h2>
              </div>
            )}
          </Spring>
          {/* <h2>Login</h2> */}


          <LoginForm
            onLoginSuccess={this.handleLoginSuccess}
          />
        </section>
      </section>
    );
  }
}

export default LoginRoute


