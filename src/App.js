

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Rewards from './components/Rewards'
import Workout from './components/Workout'

function App() {



  return (
    <div className="App">
      <header className="App-header">
        
      <p>Welcome to the app Velocity!</p>

  <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
    <Tab eventKey="home" title="Home">
      <Workout></Workout>
    </Tab>
    <Tab eventKey="profile" title="Profile">Profile Screen</Tab>
    <Tab eventKey="contact" title="Contact">Contact</Tab>
    <Tab eventKey="reward" title="Rewards">
      <Rewards></Rewards>
    </Tab>
  </Tabs>




        
      </header>
    </div>
  );
}

export default App;
