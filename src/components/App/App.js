import React, { Component , useContext} from 'react'
import { Route, Switch,  } from 'react-router-dom'
import {RouterContext} from "../../CustomBrowserRouter"
import NavBar from '../NavBar/NavBar'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute'
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute'
import LoginRoute from '../../routes/LoginRoute/LoginRoute'
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute'
import LearningRoute from '../../routes/LearningRoute/LearningRoute'
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute'
import APi from './API'
import API from './API';

import { useTransition, animated } from "react-spring";
import './App.css'

export default class App extends Component {
  state = { 
    hasError: false ,
    guess: '',
  }

  handleNext = (e) => {
    this.getHead()
    this.setState({
      response: undefined,
    })

  }

  handleSubmit = (e) => {
    console.log(e)
    API.postAns(e)
    .then(res => {
      // if(!res.ok){
      //   throw new Error('Something went wrong')
      // }
      return res
    })
    .then(res => res.json())
    .then(data => {

    this.setState({
      guess: e,
      response: data
    })

    })
  }

  setGuess = (e) => {
    this.setState({
      guess: e
    })
  }

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

  getHead = () => {
    API.getLangHead()
      .then(res => {
        if(!res.ok){
          throw new Error('something went wrong')
        }
      return res
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          lHead:data,
        })
      })
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
 
  render() {

    const {location}  = useContext(RouterContext);
    const transitions = useTransition(location, location => location.pathname, {
      from: { opacity: 0, transform: "translate(100%, 0)" },
      enter: { opacity: 1, transform: "translate(0%, 0)" },
      leave: { opacity: 0, transform: "translate(-50%, 0)" }
    });



    const { hasError } = this.state
    const dashPage = (props) => {
      return(
        <DashboardRoute 
          set={this.setSession}
          sData={this.state.sData}
          gameStart={this.getHead}
        />
      )
    }
    const loginPage = (props) => {
        return (
          <LoginRoute 
            set={this.setSession}/>
        )
    }
    const learnPage = (props) => {
      return (
        <LearningRoute 
          head={this.state.lHead}
          gameStart={this.getHead}
          setGuess={this.setGuess}
          submit={this.handleSubmit}
          guess={this.state.guess}
          response={this.state.response}
          next={this.handleNext}
        />
      )
    }

    
    return (
      <div className='App'>
        <NavBar />
        <main>
          {hasError && (
            <p>There was an error! Oh no!</p>
          )}
          
            {transitions.map(({ item, props, key }) => (
              <animated.div key={key} style={props}>
                <Switch location={item}>
                    <PrivateRoute
                      exact
                      path={'/'}
                      component={dashPage}
                    />
                    <PrivateRoute
                      exact
                      path={'/learn'}
                      component={learnPage}
                    />
                    <PublicOnlyRoute
                    exact
                      path={'/register'}
                      component={RegistrationRoute}
                    />
                    <PublicOnlyRoute
                    exact
                      path={'/login'}
                      component={loginPage}
                    />
                    <Route
                      component={NotFoundRoute}
                    />
                  </Switch>
              </animated.div>
            ))}
        </main>
      </div>
    );
  }
}
