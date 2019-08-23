import React from 'react'
import { Button } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
// import './app.css';
import TextAreaAutoSize from 'react-textarea-autosize';
import {Container,Form,Header,Segment} from "semantic-ui-react";
// import { Input } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
// import { Dimmer} from 'semantic-ui-react'




class App extends React.Component {
  state = { value: "" };

  render() {
  // state = { value: "" };

  return (
    <div>
      <header >
        
      </header>

      <body >
        <ul className="navigation">
          <li><a className = "navigation-active" href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#products'>Products</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        <p className="app-title">
            Welcome to Cham Dictionary
        </p>
        <div className="background-image">

          <Image src='./image/thap cham trang den.jpg' fluid />

          <Container className='container' >
            <Segment.Group>
              
              <Segment>
                <Header as="h3">
                  <Button.Group className='button' floated='left' >
                    <Button className='button-active'>Rumi</Button>
                    <Button >Akhar Thrah</Button>
                    <Button >Vietnamese</Button>
                  </Button.Group>
                  <br></br>

                  {/* <Button className='button'><Icon color='white' name='chevron down' /></Button> */}
                </Header>
                {/* <Input icon={{ name: 'search', circular: true, link: true }} placeholder='Search...' /> */}

                <Form role="search">
                  <form action="#" method="get">
                    <Form.Group for ="s">
                      <input type="search" name="s" id="s" placeholder="Search..."
                        onChange={e => this.setState({ value: e.target.value })}
                        value={this.state.value}/>
                        <Button id='button'><Icon name='search' /></Button>
                        <Button onClick={() => this.setState({ value: "" })} id='button'><Icon name='eraser' /></Button>
                    </Form.Group>
                  </form>
                </Form>
              </Segment>
              

              <Segment as={Form}>
              
                {/* <br></br>
                <br></br> */}
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

        </div>
        
      
      

      {/* <div class = "text-area">
          <TextAreaAutoSize style={{minHeight: 200, maxHeight: 500, width: '50%'}} placeholder='Input your text' />
          <TextAreaAutoSize style={{minHeight: 200, maxHeight: 500, width: '50%'}} placeholder='This is the result' />
      </div> */}
      {/* <Form.Field
                control={TextAreaAutoSize}
                placeholder='Input your text'
                onChange={e => this.setState({ value: e.target.value })}
                value={this.state.value}
                style={{ boxSizing: "border-box" }}
              /> */}
      {/* <Button type="submit" title="Search this word now" content="Search" color = 'black'/> */}
      {/* <Button onClick={() => this.setState({ value: "" })} content="Clear" color = 'black'/> */}
      </body>
    </div>
    
  );
}
}
export default App;




