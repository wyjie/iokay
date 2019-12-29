/* eslint-disable max-lines-per-function */

import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';

import { isObject, isPresent } from '../../utils/conditionals';
import InjectReducer from '../../utils/injectReducer';

const WithIOkay = (opts = {}) => Component => {
  const {
    connect: connectOpts = null,
    injectReducer: reducerOpts = null,
    props: propsOpts = null,
  } = opts;

  const enhancers = [];

  if (isObject(connectOpts)) {
    const { mapStateToProps = null, mapDispatchToProps = null } = connectOpts;
    enhancers.push(connect(mapStateToProps, mapDispatchToProps));
  }

  if (isObject(reducerOpts)) {
    enhancers.push(InjectReducer(reducerOpts));
  }

  if (isPresent(propsOpts)) {
    enhancers.push(withProps(propsOpts));
  }

  // TODO: Create more readable display name in the future for this generic HOC:)
  const composedComponent = compose(...enhancers)(Component);

  return composedComponent;
};

export default WithIOkay;
