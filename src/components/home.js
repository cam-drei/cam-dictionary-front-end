import React, { Component, Fragment } from "react";
import {
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

const resultRenderer = ({ rumi }) => <Header as="h3" content={rumi} />;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener("load", this.handleChange);
  }

  handleResultSelect = (e, { result }) => {
    window.history.pushState(null, null, `./#/words/${result.rumi}`);

    this.setCurrentResult(result);
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ rumi: "", isLoading: true, value });
    axios
      .get(`${process.env.REACT_APP_BACKEND_HOST}words?search=${value}`)
      .then(response => {
        // debugger;
        this.setState({
          isLoading: false,
          results: JSON.parse(response.data.result)
        });
      })
      .catch(error => console.log(error));
  };

  handleChange = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_HOST}words?search=${this.props.match.params.id}`
      )
      .then(response => {
        const results = JSON.parse(response.data.result);
        this.setCurrentResult(results[0]);
      })
      .catch(error => console.log(error));
  };

  setCurrentResult = result => {
    // debugger;
    this.setState({
      ...result
    });
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Fragment>
        {/* {JSON.stringify(process.env)} */}
        <div className="background-image">
          <Image src="./image/my_son.jpg" fluid />

          <Container className="container">
            <p className="app-title">Cham Dictionary</p>

            <Segment.Group>
              <Segment>
                <Search
                  placeholder="Search for word..."
                  size="huge"
                  loading={isLoading}
                  onResultSelect={this.handleResultSelect}
                  onSearchChange={_.debounce(this.handleSearchChange, 500, {
                    leading: true
                  })}
                  results={results}
                  value={value}
                  resultRenderer={resultRenderer}
                />
                <Icon
                  onClick={() =>
                    this.setState({ results: [], value: "", rumi: "" })
                  }
                  circular
                  name="close"
                />
              </Segment>

              <Segment
                className={this.state.rumi ? "box result" : "result-hide"}
              >
                <h2 style={{ textAlign: "center" }}>This is the result</h2>

                <table style={{ width: "100%", textAlign: "left" }}>
                  <tbody>
                    <tr style={{ color: "red" }}>
                      <th style={{ width: "130px" }}>
                        <h2>Rumi</h2>
                      </th>
                      <th>
                        <h2>{this.state.rumi}</h2>
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
                      <th>
                        {this.state.extendeds && this.state.extendeds.length
                          ? "Full Description"
                          : ""}
                      </th>

                      <th>
                        {(this.state.extendeds || []).map((item, index) => (
                          <p key={index}>
                            <Divider />
                            <span>
                              {this.state.extendeds.length > 1
                                ? index + 1 + ". "
                                : ""}
                            </span>
                            <strong>{item.wordClasses}</strong> &nbsp;
                            {item.rumi ? " " : ""} {item.rumi}
                            {item.akharThrah ? " " : ""}
                            <span className="cam-font">{item.akharThrah}</span>
                            &nbsp;
                            {item.source} &nbsp;
                            {item.vietnamese}
                            {item.french ? " = " : " "} {item.french}
                            <p style={{ color: "#993300" }}>{item.english}</p>
                            <Divider />
                            <ul>
                              {(this.state.examples[index] || []).map(
                                (item, index) => (
                                  <li key={index}>
                                    <span style={{ fontStyle: "italic" }}>
                                      {item.rumi}
                                    </span>
                                    &nbsp;
                                    <span className="cam-font">
                                      {item.akharThrah}
                                    </span>
                                    &nbsp;
                                    {item.source} &nbsp;
                                    {item.vietnamese}
                                    {item.french ? " = " : " "} {item.french}
                                    {item.english ? " = " : " "}
                                    <span style={{ color: "#993300" }}>
                                      {item.english}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          </p>
                        ))}
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
