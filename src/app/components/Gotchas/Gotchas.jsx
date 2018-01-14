import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Container, Header, Button } from 'semantic-ui-react';

class Gotchas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  updateTitle(dir) {
    return () => {
      if (dir === 'up') {
        this.setState({ value: this.state.value + 1 });
      } else {
        this.setState({ value: this.state.value - 1 });
      }
    };
  }

  render() {
    const { value } = this.state;

    return (
      <Container style={{ marginTop: '3em' }}>
        <div className="grid">
          <div className="col-12">
            <Header as="h1">{value}</Header>
          </div>
          <div className="col-12">
            <Button onClick={this.updateTitle('up')} primary>
              +
            </Button>
            <Button onClick={this.updateTitle('down')} primary>
              -
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}

// Gotchas.propTypes = {

// }

export default Gotchas;
