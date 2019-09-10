import React from 'react'
import { Button} from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
// // import TextAreaAutoSize from 'react-textarea-autosize';
// import {Container,Form} from "semantic-ui-react";
import {Segment} from 'semantic-ui-react'
// import { Grid } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import _ from 'lodash'
import { Component } from 'react'
import { Search, Container} from 'semantic-ui-react'
import {Header} from 'semantic-ui-react'
import axios from 'axios';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";



const initialState = { isLoading: false, results: [], value: '' }
const resultRenderer = ({ title }) => <Header as='h3' content={title} />

class App extends Component {    state = initialState

  handleResultSelect = (e, { result}) => this.setState({
    title: result.title, akharThrah: result.description.akharThrah, source: result.description.source, 
    vietnamese: result.description.vietnamese, french: result.description.french, pronunciation: result.description.pronunciation, fullDescription: result.description.fullDescription})

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    this.setState({ title: '' })

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
      <HashRouter>

        <ul className="navigation">
          <li><NavLink exact to="/"  >Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        
        <div className="background-image">

          <Image src='./image/thap cham my son3.jpg' fluid />

          <Container className='container' >
          <p className="app-title">
            Cham Dictionary
          </p>
            {/* <Grid className='input'> */}
            <Segment.Group>
            <Segment> 
              {/* <Icon onClick={() => this.setState({ value: "" })} circular name="close" /> */}

              <Button onClick={() => this.setState({ results: [], value: "", title: '' })} className='button'><Icon name='eraser' /></Button>
              <Search placeholder="Search for word..."
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, {leading: true,})}
                results={results}
                value={value}
                resultRenderer={resultRenderer}
                {...this.props}
                // onChange={e => this.setState({ clear: e.target.clear })}
                // clear={this.state.clear}
              ></Search>
            </Segment> 
            
            <Segment className ={this.state.title ? 'box result' : 'result-hide'}>
              <h2 style={{ textAlign: "center" }}>This is the result</h2>
    
              <table style={{width:"25%", textAlign: "left"}}>
                <tr style={{ color: "red" }}>
                  <th><h2>Rumi</h2></th>
                  <th><h2>{this.state.title}</h2></th>
                </tr>
                <tr>
                    <th>Akhar Thrah</th>
                    <th>{this.state.akharThrah}</th>
                </tr>
                <tr>
                    <th>Viet Name</th>
                    <th>{this.state.vietnamese}</th>
                </tr>
                <tr>
                    <th>French</th>
                    <th>{this.state.french}</th>
                </tr>
                <tr>
                    <th>Pronunciation</th>
                    <th>{this.state.pronunciation}</th>
                </tr>
                <tr>
                    <th>Full Description</th>
                    <th>{this.state.fullDescription}</th>
                </tr>
                <tr>
                    <th>Source</th>
                    <th>{this.state.source}</th>
                </tr>
              </table>
            </Segment>
            
            <Segment className ='box'> 
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </Segment> 
            </Segment.Group>
            {/* </Grid> */}
            
          </Container>

        </div>
      </HashRouter>

      </body>
      
    )
  }
}


export default App;



              // <h2>Rumi: {this.state.title}</h2>
              // <p>Akhar Thrah: &nbsp;&nbsp; {this.state.akharThrah}</p>
              // <p>Viet Nam: &nbsp;&nbsp; {this.state.vietnamese}</p>
              // <p>French: &nbsp;&nbsp; {this.state.french}</p>
              // <p>Pronunciation: &nbsp;&nbsp; {this.state.pronunciation}</p>
              // <p>Full Description: &nbsp;&nbsp; {this.state.fullDescription}</p>
              // <p>Source: &nbsp;&nbsp; {this.state.source}</p> 
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







