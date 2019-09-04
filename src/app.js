import React from 'react'
import { Button} from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
// // import './app.css';
// // import TextAreaAutoSize from 'react-textarea-autosize';
// import {Container,Form} from "semantic-ui-react";
// import {Segment} from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'

import _ from 'lodash'
// import faker from 'faker'
import { Component } from 'react'
import { Search, Container} from 'semantic-ui-react'
import axios from 'axios';



const initialState = { isLoading: false, results: [], value: '' }

class App extends Component {    state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    
// debugger;
      axios.get(`http://localhost:3001/words?search=${value}`)
        .then(response => {
          this.setState({ 
            isLoading: false,
            results: JSON.parse(response.data.result)
          });
        })
        .catch(error => console.log(error));

  }

  render() {
    const { isLoading, value, results } = this.state

    return (
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

          <Image src='./image/thap cham my son1.jpg' fluid />

          <Container className='container' >
            <Grid className='input'>
              {/* <Icon onClick={() => this.setState({ value: "" })} circular name="close" /> */}

              <Button onClick={() => this.setState({ value: "" })} className='button'><Icon name='eraser' /></Button>
              <Search placeholder="Search for word..."
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, {leading: true,})}
                results={results}
                value={value}
                {...this.props}
                onChange={e => this.setState({ clear: e.target.clear })}
                clear={this.state.clear}
              />

            </Grid>
          </Container>

        </div>
      </body>
      
    )
  }
}

export default App;


// class App extends React.Component {
//   state = { value: "" };

//   render() {
//   // state = { value: "" };
//     return (
//       <div>
//         <header >
          
//         </header>

//         <body >
//           <ul className="navigation">
//             <li><a className = "navigation-active" href='#home'>Home</a></li>
//             <li><a href='#about'>About</a></li>
//             <li><a href='#products'>Products</a></li>
//             <li><a href='#contact'>Contact</a></li>
//           </ul>
//           <p className="app-title">
//               Welcome to Cham Dictionary
//           </p>
//           <div className="background-image">

//             <Image src='./image/thap cham trang den.jpg' fluid />

//             <Container className='container' >
//               {/* <Segment.Group> */}
                
//                 {/* <Segment> */}
//                   <Form role="search">
//                     <Form action="#" method="get">
//                       <Form.Group for ="s">
//                         <input className='form' type="search" name="s" id="s" placeholder="Search for word..." 
//                           onChange={e => this.setState({ value: e.target.value })}
//                           value={this.state.value}/>
//                           <Button className='button-active'><Icon name='search' /></Button>
//                           <Button onClick={() => this.setState({ value: "" })} className='button'><Icon name='eraser' /></Button>
//                       </Form.Group>
//                     </Form>
//                   </Form>
//                 {/* </Segment> */}

//               {/* </Segment.Group> */}
//             </Container>

//           </div>


        
//                 {/* <Segment as={Form}>
                
//                   <TextAreaAutoSize
//                     placeholder='This is the result'
//                     onHeightChange={(height, instance) =>
//                       console.log(height, instance.rowCount)
//                     }
//                     useCacheForDOMMeasurements
//                   />
//                 </Segment> */}
//                   {/* <Header as="h3">
//                     <Button.Group className='button' floated='left' >
//                       <Button className='button-active'>Rumi</Button>
//                       <Button >Akhar Thrah</Button>
//                       <Button >Vietnamese</Button>
//                     </Button.Group>
//                     <br></br>
//                   </Header> */}

//         {/* <div class = "text-area">
//             <TextAreaAutoSize style={{minHeight: 200, maxHeight: 500, width: '50%'}} placeholder='Input your text' />
//             <TextAreaAutoSize style={{minHeight: 200, maxHeight: 500, width: '50%'}} placeholder='This is the result' />
//         </div> */}
//         {/* <Form.Field
//                   control={TextAreaAutoSize}
//                   placeholder='Input your text'
//                   onChange={e => this.setState({ value: e.target.value })}
//                   value={this.state.value}
//                   style={{ boxSizing: "border-box" }}
//                 /> */}
//         {/* <Button type="submit" title="Search this word now" content="Search" color = 'black'/> */}
//         {/* <Button onClick={() => this.setState({ value: "" })} content="Clear" color = 'black'/> */}
//         </body>
//       </div>
      
//     );
//   }
// }







