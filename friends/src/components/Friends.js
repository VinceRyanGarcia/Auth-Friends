import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialState ={
  name: '',
  age: '',
  email: '',
}

export default function Friends(props){
  const [friend, setFriend] = useState(initialState)

  const handleChange = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    })
  }

  const submit = e =>{
    e.preventDefault();

    axiosWithAuth()
      .post('/api/friends/', friend )
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err) );

  }
  return(
    <div>
        <form onSubmit={ submit }>
          <input type="text" name="name" placeholder="Name" value={friend.name} onChange={handleChange} />
          <input type="text" name="age" placeholder="Age" value={friend.age} onChange={handleChange} />
          <input type="text" name="email" placeholder="Email" value={friend.email} onChange={handleChange} />
          <button>Add Friend</button>
        </form>
    </div>

  );
}