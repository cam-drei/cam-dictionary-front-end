import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import './app.css';
import TextArea from 'react-textarea-autosize';


function App() {
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


      <div>
        <Button.Group floated='left'>
          <Button class = "navigation-active" color='blue'>Rumi</Button>
          <Button color='blue'>Akhar Thrah</Button>
          <Button color='blue'>Vietnamese</Button>
        </Button.Group>

        <Button color='blue'>
          <Icon color='white' name='exchange' />
        </Button>

        <Button.Group floated='right'>
          <Button color='blue'>Rumi</Button>
          <Button color='blue'>Akhar Thrah</Button>
          <Button color='blue'>Vietnamese</Button>
        </Button.Group>
      </div>
      
      <br></br>
      <br></br>
      <div class = "text-area">
          <TextArea style={{minHeight: 200, maxHeight: 500, width: '50%'}} defaultValue='Input your text' />
          <TextArea style={{minHeight: 200, maxHeight: 500, width: '50%'}} defaultValue='This is the result' />
      </div>
      
      
      
     
      </body>
    </div>
    
  );
}

export default App;



