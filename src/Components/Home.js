import Intro from './Intro'
import Projects from './Projects'
import Techs from './Techs'

function Home() {
  return (
    <div className="main">
      <Intro />
      <Techs />
      <Projects />
    </div>    
  );
}

export default Home;
