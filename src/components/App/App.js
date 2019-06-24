import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute'
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute'
import LoginRoute from '../../routes/LoginRoute/LoginRoute'
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute'
import LearningRoute from '../../routes/LearningRoute/LearningRoute'
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute'
import APi from './API'
import './App.css'

export default class App extends Component {
  state = { hasError: false }

  setSession = () => {
    APi.getLang()
      .then(res => {
        if(!res.ok){
          throw new Error('Something went wrong')
        }
        return res
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data)

        this.setState({
          sData: data,
        })
      })
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
    const dashPage = (props) => {
      return(
        <DashboardRoute 
          set={this.setSession}
        />
      )
    }
    const loginPage = (props) => {
        return (
          <LoginRoute 
            set={this.setSession}/>
        )
    }
    return (
      <div className='App'>
        <NavBar />
        <main>
          {hasError && (
            <p>There was an error! Oh no!</p>
          )}
          <Switch>
            <PrivateRoute
              exact
              path={'/'}
              component={dashPage}
            />
            <PrivateRoute
              path={'/learn'}
              component={LearningRoute}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationRoute}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={loginPage}
            />
            <Route
              component={NotFoundRoute}
            />
          </Switch>
        </main>
      </div>
    );
  }
}
