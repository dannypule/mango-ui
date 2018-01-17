import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Position, Toaster } from '@blueprintjs/core';
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

  refHandlers = {
    toaster: ref => {
      this.toaster = ref;
    }
  };

  addToast = () => {
    this.toaster.show({ message: 'Toasted!' });
  };

  render() {
    // const { value } = this.props;

    return (
      <div>
        <Button onClick={this.addToast} text="Procure toast" />
        <Toaster position={Position.TOP_RIGHT} ref={this.refHandlers.toaster} />
      </div>
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
