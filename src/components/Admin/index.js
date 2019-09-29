import React, { Component } from 'react';

import { withFirebase } from '../Firebase'

class AdminPage extends Component {
  constructor (props) {
    super(props)

    this.state= {
      loading: false, 
      users: [],
    }
  }

  componentDidMount(){
    this.setState({ loading: true})

    this.props.firebase.users().on('value', snapshot => {

      const usersObject = snapshot.val()

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key], 
        uid: key,
      }))

      this.setState({
        users: usersList ,
        loading: false ,
      })
    })
  }

  componentWillUnmount() {
    this.props.firebase.users().off()
  }

  render() {
    const { users, loading } = this.state

    return(
      <div>
        <h1>Admin</h1>

        { loading && <div>LOADING... </div> }

        <UserList users = {users} />

    </div>
    )
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <p>
          <strong>ID: </strong> {user.uid}
        </p>
        <p>
          <strong>EMAIL: </strong> {user.email}
        </p>
        <p>
          <strong>UserName: </strong> {user.username}
        </p>
      </li>
    ))}
  </ul>
)


export default withFirebase(AdminPage);