import React from 'react'
import { render } from 'react-dom'
// import { Route, hashHistory } from 'react-router'
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Rooms from './Rooms'
import Room from './Room'
import firebase from 'firebase'

// Routing 정의하기
const appRouting = (
  <Router history={hashHistory}>
    <Route path='/'>
      <Route path='login' component={Login} />
      <Route path='signup' component={Signup} />
      {/* <Route path='rooms' component={Rooms}> */}
        {/* <Route path=':roomId' component={Room} /> */}
      {/* </Route> */}
    </Route>
  </Router>
)

// Routing 초기화

// var los

if (!window.location.hash.length) {
  window.location.hash = '#/login'
}

// Firebase 초기화하기
var config = {
  apiKey: 'AIzaSyCBOuhyVABdolhsflMNhgO1FOHRr_Th-xg',
  authDomain: 'electron-chat-becf8.firebaseapp.com',
  databaseURL: 'https://electron-chat-becf8.firebaseio.com',
  projectId: 'electron-chat-becf8',
  storageBucket: 'electron-chat-becf8.appspot.com',
  messagingSenderId: '226168833359'
}
firebase.initializeApp(config)

// Application 렌더링하기
/* render(<div>Hello, Electron and Reac JSX</div>, document.getElementById('app')) */

render(appRouting, document.getElementById('app'))
