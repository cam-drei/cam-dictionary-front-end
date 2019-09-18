import React, { Component } from "react";
import { Container, Header} from 'semantic-ui-react'

 
class Contact extends Component {
  render() {
    return (
        <Container text>
        <Header as='h2' style={{ textAlign: "center" }}>Contact</Header>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>

        </Container>
    );
  }
}
 
export default Contact;