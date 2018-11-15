import React from 'react'
import { Route, Link } from 'react-router-dom'
import Room from './Room'
export default class Rooms extends React.Component {
  render () {
    return (
      <div>
        <h2>Rooms</h2>
        <ul>
          <li><Link to='/rooms/1'>Room 1</Link></li>
          <li><Link to='/rooms/2'>Room 2</Link></li>
        </ul>
        <div>
          {/* {this.props.children} */}
          <Route path=':roomId' component={Room} />
        </div>
      </div>
    )
  }
}
