import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import './app.css';
import TextAreaAutoSize from 'react-textarea-autosize';
import {Container,Form,Header,Segment} from "semantic-ui-react";


class App extends React.Component {
  state = { value: "" };

  render() {
  // state = { value: "" };

  return (
    <div>
      <header>
       
        
      </header>
      <body >
      
      <ul class="navigation">
        <li><a class = "navigation-active" href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#products'>Products</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <p class="App-title">
          Welcome to Cham Dictionary
      </p>
      
      {/* <br></br> */}

      <Container>
        <Segment.Group>

          <Segment>
            <Header as="h3">
              <Button.Group floated='left'>
                <Button class = "navigation-active" color='blue'>Rumi</Button>
                <Button color='blue'>Akhar Thrah</Button>
                <Button color='blue'>Vietnamese</Button>
              </Button.Group>

              <Button color='black'>
                <Icon color='white' name='exchange' />
              </Button>
            </Header>
    
            <Form>
              <Form.Field
                control={TextAreaAutoSize}
                // label="About"
                placeholder='Input your text'
                onChange={e => this.setState({ value: e.target.value })}
                // useCacheForDOMMeasurements
                value={this.state.value}
                style={{ boxSizing: "border-box" }}
              />

              <Form.Button
                content="Clear"
                onClick={() => this.setState({ value: "" })}
                color = 'black'
              />
            </Form>
          </Segment>

          <Segment as={Form}>
            <Header as="h3">
              <Button.Group floated='left'>
                <Button color='blue'>Rumi</Button>
                <Button color='blue'>Akhar Thrah</Button>
                <Button color='blue'>Vietnamese</Button>
              </Button.Group> 
            </Header>
            <br></br>
            <br></br>
            <TextAreaAutoSize
              placeholder='This is the result'
              onHeightChange={(height, instance) =>
                console.log(height, instance.rowCount)
              }
              useCacheForDOMMeasurements
            />
          </Segment>
        </Segment.Group>
      </Container>

      {/* <div class = "text-area">
          <TextAreaAutoSize style={{minHeight: 200, maxHeight: 500, width: '50%'}} placeholder='Input your text' />
          <TextAreaAutoSize style={{minHeight: 200, maxHeight: 500, width: '50%'}} placeholder='This is the result' />
      </div> */}
      
      
      </body>
    </div>
    
  );
}
}
export default App;




