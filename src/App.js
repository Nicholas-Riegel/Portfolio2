import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './Components/Nav'
import Home from './Components/Home'
import Contact from './Components/Contact'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>    
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
      </Switch >
    </Router>    
  );
}

export default App;
