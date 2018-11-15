import React from 'react'
import { render } from 'react-dom'
// import { Route, hashHistory } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Rooms from './Rooms'

import firebase from 'firebase'

// Routing 정의하기
const appRouting = (
  <Router>
    <div style={{margin: 20}}>
      <Route exact path='/' component={Home} />
      <Route path='/ko' component={HelloKorean} />
      <Route path='/ja' component={HelloJapanese} />
      {/* <Route exact path='/' />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/rooms' component={Rooms} /> */}
      {/* <Route path=':roomId' component={Room} /> */}
      {/* </Route> */}
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h1>Hello App</h1>
    <p>언어를 선택</p>
    <ul>
      <li><a href='/ko'>한국어</a></li>
      <li><a href='/Ja'>일본어</a></li>
    </ul>
  </div>
)

const HelloKorean = () => (
  <div>
    <h1>안녕하세요</h1>
    <p><a href='/'>뒤로가기</a></p>
  </div>
)

const HelloJapanese = () => (
  <div>
    <h1>gonichiwa</h1>
    <p><a href='/'>뒤로가기</a></p>
  </div>
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
