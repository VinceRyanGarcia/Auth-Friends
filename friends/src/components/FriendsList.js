import React from 'react';
import Friends from './Friends';
import {axiosWithAuth} from '../utils/axiosWithAuth';


class FriendsList extends React.Component {
  state = {
    friends: []
  }
  componentDidMount(){
    this.getFriends();
  }

  getFriends = () => {
    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Friends />
        <div>
          { this.state.friends.map( friend => {
            return <ul>
                  <li>Name: {friend.name} </li> 
                  <li>Age: {friend.age} </li> 
                  <li>Email: {friend.email}</li>
              </ul>
          })}
        </div>
      </div>
    )
  }
}

export default FriendsList;