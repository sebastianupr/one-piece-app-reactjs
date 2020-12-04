import { React } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import SingleCharacter from './views/SingleCharacter';

function App () {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/character/:id" component={SingleCharacter}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App
