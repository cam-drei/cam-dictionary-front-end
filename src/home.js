import React, { Component } from "react";
import { Button} from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
// // import TextAreaAutoSize from 'react-textarea-autosize';
import {Container} from "semantic-ui-react";
import {Segment} from 'semantic-ui-react'
// import { Grid } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import _ from 'lodash'
import { Search} from 'semantic-ui-react'
import {Header} from 'semantic-ui-react'
import axios from 'axios';


 
const initialState = { isLoading: false, results: [], value: '' }
const resultRenderer = ({ title }) => <Header as='h3' content={title} />

class Home extends Component {    
  
  state = initialState

  handleResultSelect = (e, { result}) => {
    this.setState({
      // test: JSON.parse(result.description.fullDescription),
      title: result.title, akharThrah: result.description.akharThrah, source: result.description.source, 
      vietnamese: result.description.vietnamese, french: result.description.french, english: result.description.english, pronunciation: result.description.pronunciation, fullDescription: JSON.parse(result.description.fullDescription)});
  }
    

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
    // const abc = (lists) => {
    //   var test = (lists || [1,2,4]).map((item, key) =>
    //     <li>{item}</li>
    //   );
    //   return test;
    // }
    return (
      <>
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
                // {...this.props}
                // onChange={e => this.setState({ clear: e.target.clear })}
                // clear={this.state.clear}
              ></Search>
            </Segment> 
            
            <Segment className ={this.state.title ? 'box result' : 'result-hide'}>
              <h2 style={{ textAlign: "center" }}>This is the result</h2>
    
              <table style={{width:"100%", textAlign: "left"}}>
                <tbody>
                  
                <tr style={{ color: "red" }}>
                  <th style={{width:"130px"}}><h2>Rumi</h2></th>
                  <th><h2>{this.state.title}</h2></th>
                </tr>
                <tr>
                    <th>Pronunciation</th>
                    <th>{this.state.pronunciation}</th>
                </tr>
                <tr>
                    <th>Akhar Thrah</th>
                    <th>{this.state.akharThrah}</th>
                </tr>
                <tr>
                    <th>Source</th>
                    <th>{this.state.source}</th>
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
                    <th>English</th>
                    <th style={{ color: "#993300" }}>{this.state.english}</th>
                </tr>
                <tr>
                    <th>Full Description</th>
                    <th>
                      <ul>
                        {/* {console.log('test', this.state.test)} */}
                        {(this.state.fullDescription || []).map((item, index) => <li key={index}>{item.list}</li>)}
                      </ul>
                    </th>
                </tr>
                </tbody>
              </table>
            </Segment> 
            </Segment.Group>
            {/* </Grid> */}
            
          </Container>

        </div>
      
      </>
      
    )
  }
}
 
export default Home;

