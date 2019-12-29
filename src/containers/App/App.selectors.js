import { createSelector } from 'reselect';

import { REDUCER_KEY } from './App.constants';
import { initialState } from './App.reducer';

const selectAppPage = state => state[REDUCER_KEY] || initialState;

const makeSelectInitTerminalCommand = () =>
  createSelector(selectAppPage, appPageState => appPageState.initCommands);

const makeSelectCurrentTerminalCommand = () =>
  createSelector(selectAppPage, appPageState => appPageState.currentCommands);
const makeSelectCommandMaxIndex = () =>
  createSelector(selectAppPage, appPageState => appPageState.commandMaxIndex);
const makeSelectCurrentIndex = () =>
  createSelector(selectAppPage, appPageState => appPageState.currentIndex);
const makeSelectCommandRun = () =>
  createSelector(selectAppPage, appPageState => appPageState.commandRun);

const makeSelectCurrentChar = () =>
  createSelector(selectAppPage, appPageState => appPageState.currentChar);

export {
  makeSelectCurrentIndex,
  makeSelectCommandMaxIndex,
  makeSelectCurrentTerminalCommand,
  makeSelectInitTerminalCommand,
  makeSelectCommandRun,
  makeSelectCurrentChar,
};
