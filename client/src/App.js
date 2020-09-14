import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Search from "./Search";
import About from "./About";
import Login from "./Login";
import NotFound from "./NotFound";

export default class App extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=" + 
                 process.env.REACT_APP_MAPS_API_KEY;
    script.defer = true;
    document.head.appendChild(script);
  }

  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <ul className="navbar-list">
                <li>
                  <Link to="/">Sales Tax Search</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
              </ul>
            </nav>
          </header>
          
          <main>
            <Switch>
              <Route exact path="/">
                <Search />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </main>

          <footer>
            <p>&copy; 2020 Michael Singhurse</p>
            <p>
              <a href="https://lisieuxresearch.com">Lisieux Research, LLC</a>
            </p>
          </footer>
        </div>
      </Router>
    );
  }
}
