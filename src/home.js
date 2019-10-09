import React, { Component, Fragment } from "react";
import {
  Button,
  Icon,
  Container,
  Segment,
  Image,
  Header,
  Divider,
  Search
} from "semantic-ui-react";
import _ from "lodash";
import axios from "axios";

// const initialState = { isLoading: false, results: [], value: "" };
const resultRenderer = ({ title }) => <Header as="h3" content={title} />;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { result: [] };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener("load", this.handleChange);
    window.addEventListener("hashchange", this.handleChange);
  }

  // state = initialState;

  handleResultSelect = (e, { result }) => {
    window.history.pushState(null, null, `./#/words/${result.title}`);

    this.setState({
      title: result.title,
      akharThrah: result.description.akharThrah,
      source: result.description.source,
      vietnamese: result.description.vietnamese,
      french: result.description.french,
      english: result.description.english,
      pronunciation: result.description.pronunciation,
      fullDescription: JSON.parse(result.description.fullDescription)
    });
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ title: "", isLoading: true, value });
    axios
      .get(`${process.env.REACT_APP_BACKEND_HOST}words?search=${value}`)
      .then((response) => {
        this.setState({
          isLoading: false,
          results: JSON.parse(response.data.result)
        });
      })
      .catch((error) => console.log(error));
  };

  handleChange = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_HOST}words?search=${this.props.match.params.id}`)
      .then((response) => {
        const results = JSON.parse(response.data.result);
        const result = results[0];
        this.setState({
          title: result.title,
          akharThrah: result.description.akharThrah,
          source: result.description.source,
          vietnamese: result.description.vietnamese,
          french: result.description.french,
          english: result.description.english,
          pronunciation: result.description.pronunciation,
          fullDescription: JSON.parse(result.description.fullDescription)
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Fragment>
        {JSON.stringify(process.env)}
        <div className="background-image">
          <Image src="./image/thap cham my son3.jpg" fluid />

          <Container className="container">
            <p className="app-title">Cham Dictionary</p>

            <Segment.Group>
              <Segment>
                <Button
                  onClick={() => this.setState({ results: [], value: "", title: "" })}
                  className="button"
                >
                  <Icon name="eraser" />
                </Button>
                <Search
                  placeholder="Search for word..."
                  loading={isLoading}
                  onResultSelect={this.handleResultSelect}
                  onSearchChange={_.debounce(this.handleSearchChange, 500, {
                    leading: true
                  })}
                  results={results}
                  value={value}
                  resultRenderer={resultRenderer}
                />
              </Segment>

              <Segment className={this.state.title ? "box result" : "result-hide"}>
                <h2 style={{ textAlign: "center" }}>This is the result</h2>

                <table style={{ width: "100%", textAlign: "left" }}>
                  <tbody>
                    <tr style={{ color: "red" }}>
                      <th style={{ width: "130px" }}>
                        <h2>Rumi</h2>
                      </th>
                      <th>
                        <h2>{this.state.title}</h2>
                      </th>
                    </tr>
                    <tr>
                      <th>{this.state.pronunciation ? "Pronunciation" : ""}</th>
                      <th>{this.state.pronunciation}</th>
                    </tr>
                    <tr>
                      <th>{this.state.akharThrah ? "Akhar Thrah" : ""}</th>
                      <th className="cam-font" style={{ fontSize: "1.8em" }}>
                        {this.state.akharThrah}
                      </th>
                    </tr>
                    <tr>
                      <th>{this.state.source ? "Source" : ""}</th>
                      <th>{this.state.source}</th>
                    </tr>
                    <tr>
                      <th>{this.state.vietnamese ? "Viet Nam" : ""}</th>
                      <th>{this.state.vietnamese}</th>
                    </tr>
                    <tr>
                      <th>{this.state.french ? "French" : ""}</th>
                      <th>{this.state.french}</th>
                    </tr>
                    <tr>
                      <th>{this.state.english ? "English" : ""}</th>
                      <th style={{ color: "#993300" }}>{this.state.english}</th>
                    </tr>
                    <tr>
                      {/* check if your array exists and has a length */}
                      <th>
                        {this.state.fullDescription && this.state.fullDescription.length
                          ? "Full Description"
                          : ""}
                      </th>
                      <th>
                        <ol>
                          {(this.state.fullDescription || []).map((item, index) => (
                            <li key={index}>
                              <Divider />
                              <strong>{item.meaning.wordClasses}</strong> &nbsp;
                              {item.meaning.rumi ? " " : ""} {item.meaning.rumi}
                              {item.meaning.akharThrah ? " " : ""}{" "}
                              <span className="cam-font">{item.meaning.akharThrah}</span>
                              {item.meaning.source} &nbsp;
                              {item.meaning.vietnamese}
                              {item.meaning.french ? " = " : " "} {item.meaning.french} &nbsp;
                              {item.meaning.pronunciation} &nbsp;
                              {item.meaning.fullDescription}
                              <p style={{ color: "#993300" }}>{item.meaning.english}</p>
                              <Divider />
                              <ul>
                                {item.list.map((item, index) => (
                                  <li key={index}>
                                    <span style={{ fontStyle: "italic" }}>{item.rumi}</span> &nbsp;
                                    <span className="cam-font">{item.akharThrah}</span> &nbsp;
                                    {item.source} &nbsp;
                                    {item.vietnamese}
                                    {item.french ? " = " : " "} {item.french} &nbsp;
                                    {item.english ? " - " : " "}
                                    <span style={{ color: "#993300" }}>{item.english}</span> &nbsp;
                                    {item.pronunciation} &nbsp;
                                    {item.fullDescription}
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ol>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </Segment>
            </Segment.Group>
          </Container>
        </div>
      </Fragment>
    );
  }
}
export default Home;
