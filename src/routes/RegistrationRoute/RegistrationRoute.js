import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

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
      <section className='login-wrapper'>
        <section className='login-section'>
          <p>
            Practice learning a language with the spaced reptition revision technique.
        </p>
          <h2>Sign up</h2>
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </section>
      </section>
    );
  }
}

export default RegistrationRoute
