import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Nav from './Components/Nav'
import Home from './Components/Home'
import Contact from './Components/Contact'
import ParticlesBackground from './Components/ParticlesBackground'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>    
      <ParticlesBackground id="particles"/>
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes >
    </Router>    
  );
}

export default App;
