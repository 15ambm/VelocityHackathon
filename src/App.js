

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import {Row, Col, Nav} from 'react-bootstrap'
import Rewards from './components/Rewards'
import Workout from './components/Workout'
import Feed from './components/Feed'
import Container from 'react-bootstrap/Container'
import Profile from './components/Profile'
function App() {



  return (
    <div className="App">
      <header className="App-header">
        
      <p>Welcome to the app Velocity!</p>

  <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
    <Tab eventKey="home" title="Home">
      <Workout></Workout>
    </Tab>
    <Tab eventKey="profile" title="Profile"><Profile/></Tab>
    <Tab eventKey="feed" title="Feed">
      <Feed></Feed>
    </Tab>
    <Tab eventKey="reward" title="Rewards">
      <Rewards></Rewards>
    </Tab>
  </Tabs>




        
      </header>
    </div>
  );
}

const App2 = () => {
  return (
    <Container style={{ margin: "20px"}}>
      <h1>Welcome to ScotiaFit!</h1>
      <Tab.Container id="left-tabs-example" defaultActiveKey="home">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column" >
              <Nav.Item>
                <Nav.Link eventKey="home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="feed">Feed</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="reward">Reward</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="profile">Profile</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="home">
                <Workout></Workout>
              </Tab.Pane>
              <Tab.Pane eventKey="feed">
                <Feed></Feed>
              </Tab.Pane>
              <Tab.Pane eventKey="reward">
                <Rewards></Rewards>
              </Tab.Pane>
              <Tab.Pane eventKey="profile">
                <Profile/>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}

export default App2;
