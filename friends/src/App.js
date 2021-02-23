import './App.css';

// imports
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import { useHistory, Link, Switch, Route } from 'react-router-dom';


function App() {

const history = useHistory();

const logout = (e) => {
  e.preventDefault();
  localStorage.removeItem('token');
  history.push("/login");
}

  return (
    <div className="App">
      <header className="App-header">
      <Link to="/login">Login</Link>
      <Link to="/protected">Protected Page</Link>
      <Link onClick={logout}>Logout</Link> 
    <Switch>
      <PrivateRoute exact path="/friends" component={FriendsList} />
      <Route path="/login" component={Login} />
    </Switch>
      </header>
    </div>
  );
}

export default App;
