import React from 'react';
import { createStructuredSelector } from 'reselect';

import IOkay from '../../composers/Main';
import reducer from './App.reducer';
import { REDUCER_KEY } from './App.constants';
import {
  makeSelectCurrentTerminalCommand,
  makeSelectCurrentIndex,
  makeSelectCommandMaxIndex,
  makeSelectCommandRun,
  makeSelectCurrentChar,
} from './App.selectors';
import App from './App.component';
import { viewNext } from './App.action';

const mapStateToProps = createStructuredSelector({
  commands: makeSelectCurrentTerminalCommand(),
  currentIndex: makeSelectCurrentIndex(),
  commandMaxIndex: makeSelectCommandMaxIndex(),
  commandRun: makeSelectCommandRun(),
  currentChar: makeSelectCurrentChar(),
});

const mapDispatchToProps = dispatch => ({
  onViewNextLine: () => dispatch(viewNext()),
});

const AppContainer = props => {
  return <App {...props} />;
};

export default IOkay({
  connect: {
    mapStateToProps,
    mapDispatchToProps,
  },
  injectReducer: { key: REDUCER_KEY, reducer },
})(AppContainer);
