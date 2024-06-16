import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from './pages/Main';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import './styles/common/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    )
  }
}

export default App;