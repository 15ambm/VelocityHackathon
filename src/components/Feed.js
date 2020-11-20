import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Feed = () => (
    <Card.Group style={{ margin: "10px"}}>
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
          />
          <Card.Header>Alex</Card.Header>
          <Card.Description>
            Alex just completed a 5KM run!
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Image
            src="https://unsplash.com/photos/SBiVq9eWEtQ/download?force=true"
            size="medium"
            />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
          />
          <Card.Header>Joyce</Card.Header>
          <Card.Description>
            Joyce completed the Arms program in 30 minutes!
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
          />
          <Card.Header>Natasha</Card.Header>
          <Card.Description>
            Natasha completed a core work in under 20 mins!
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  )
  
  export default Feed