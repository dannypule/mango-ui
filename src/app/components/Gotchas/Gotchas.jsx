import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Header, Button } from 'semantic-ui-react';
import { getValue } from '../../selectors/gotchasSelectors';
import { increaseValue, decreaseValue } from '../../actions/components/gotchasActions';

class Gotchas extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    increaseValue: PropTypes.func.isRequired,
    decreaseValue: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  render() {
    const { value } = this.props;

    return (
      <Container style={{ marginTop: '3em' }}>
        <div className="grid">
          <div className="col-12">
            <Header as="h1">{value}</Header>
          </div>
          <div className="col-12">
            <Button onClick={e => this.props.increaseValue(e, 3)} primary>
              +
            </Button>
            <Button onClick={e => this.props.decreaseValue(e, 3)} primary>
              -
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  value: getValue(state)
});

const mapDispatchToProps = dispatch => ({
  increaseValue: (event, amount) => {
    dispatch(increaseValue(amount));
  },
  decreaseValue: (event, amount) => {
    dispatch(decreaseValue(amount));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Gotchas);
