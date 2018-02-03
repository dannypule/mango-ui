import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '@blueprintjs/core';
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

  increase = (amount) => (e) => {
    e.preventDefault()
    this.props.increaseValue(amount)
  }

  decrease = (amount) => (e) => {
    e.preventDefault()
    this.props.decreaseValue(amount)
  }

  render() {
    const { value } = this.props;

    return (
      <div>
        <div>
          {value}
        </div>
        <Button onClick={this.increase(5)} text="Increase value" className="pt-button pt-intent-success">
          <span className="pt-icon-standard pt-icon-arrow-up pt-align-right" />
        </Button>
        <Button onClick={this.decrease(5)} text="Decrease value" className="pt-button pt-intent-success">
          <span className="pt-icon-standard pt-icon-arrow-down pt-align-right" />
        </Button>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   value: getValue(state)
// });

// const mapDispatchToProps = dispatch => ({
//   increaseValue: (event, amount) => {
//     dispatch(increaseValue(amount));
//   },
//   decreaseValue: (event, amount) => {
//     dispatch(decreaseValue(amount));
//   }
// });

export default connect(
  state => ({
    value: getValue(state)
  }),
  {
    increaseValue,
    decreaseValue
  }
)(Gotchas);
