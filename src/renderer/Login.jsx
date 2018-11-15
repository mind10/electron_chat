import React from 'react'
import { Link } from 'react-router-dom'
import Errors from './Errors'
import firebase from 'firebase'

// const history = createHashHistory()

const FORM_STYLE = {
  margin: '0 auto',
  padding: 30
}

const SIGNUP_LINK_STYLE = {
  display: 'inline-block',
  marginLeft: 10
}

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: window.localStorage.userEmail || '',
      password: window.localStorage.userPassword || '',
      errors: []
    }
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
    this.handleOnSubimt = this.handleOnSubmit.bind(this)
  }

  handleOnChangeEmail (e) {
    this.setState({ email: e.target.value })
  }

  handleOnChangePassword (e) {
    this.setState({ password: e.target.value })
  }

  // 로그인 처리
  handleOnSubmit (e) {
    const { email, password } = this.state
    const errors = []
    let isValid = true
    e.preventDefault()
    if (!email.length) {
      isValid = false
      errors.push("Email can't be blank.")
    }
    if (!password.length) {
      isValid = false
      errors.push("Password can't be blank.")
    }
    if (!isValid) {
      // 필수 입력 유효성 검사를 통과하지 못하면 오류 출력하기
      this.setState({ errors })
      return
    }

    // Firebase 로그인 처리
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      // 다음 접속때 로그인을 생략할 수 있게 localStorage에 저장해두기
      window.localStorage.userEmail = email
      window.localStorage.userPassword = password
      // 채팅방 목록 화면으로 이동하기
      // this.props.history.push('/rooms')
      // history.push('/rooms')
    }).catch(() => {
      // Firebase에서 로그인 오류가 발생하는 경우
      this.setState({ errors: ['Incorrect email or password.'] })
    })
  }

  render () {
    return (
      <form style={FORM_STYLE} onSubmit={this.handleOnSubmit}>
        <Errors errorMessage={this.state.errors} />
        <div className='form-group'>
          <label>Email address</label>
          <input
            type='email'
            className='form-control'
            placeholder='email'
            onChange={this.handleOnChangeEmail}
            value={this.state.email}
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='password'
            onChange={this.handleOnChangePassword}
            value={this.state.password}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-large btn-default'>Login</button>
          <div style={SIGNUP_LINK_STYLE}>
            <Link to='/signup'>create new account</Link>
          </div>
        </div>
      </form>
      // <div>
      //   <h2>Login</h2>
      //   <Link to='/rooms'>Login</Link> <br />
      //   <Link to='/signup'>Create new account</Link>
      // </div>
    )
  }
}
