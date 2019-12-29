import produce from 'immer';

import { VIEW_NEXT_LINE, LINE, CHAR } from './App.constants';
import { isObject } from '../../utils/conditionals';

export const initialState = {
  initCommands: [
    { command: 'yarn create react-app iokay', type: CHAR },
    'yarn create v1.19.1',
    '[1/4] 🔍  Resolving packages...',
    '[2/4] 🚚  Fetching packages...',
    '[3/4] 🔗  Linking dependencies...',
    '[4/4] 🔨  Building fresh packages...',
    'success Installed "create-react-app@3.3.0" with binaries: create-react-app',
    'iokay empty',
    {
      command:
        '[###############################################################] 92/92',
      type: CHAR,
    },
    'Creating a new React app in ~/iokay.',
    'iokay empty',
    'Installing packages. This might take a couple of minutes.',
    'Installing react, react-dom, and react-scripts with cra-template...',
    'iokay empty',
    'yarn add v1.19.1',
    '[1/4] 🔍  Resolving packages...',
    '[2/4] 🚚  Fetching packages...',
    '[3/4] 🔗  Linking dependencies...',
    '[4/4] 🔨  Building fresh packages...',
    'success Saved lockfile.',
    'success Saved 35 new dependencies.',
    'info Direct dependencies',
    '├─ cra-template@1.0.0',
    '├─ react-dom@16.12.0',
    '├─ react-scripts@3.3.0',
    '└─ react@16.12.0',
    '✨  Done in 10.66s.',
    'iokay empty',
    'Installing template dependencies using yarnpkg...',
    'yarn add v1.19.1',
    '[1/4] 🔍  Resolving packages...',
    '[2/4] 🚚  Fetching packages...',
    '[3/4] 🔗  Linking dependencies...',
    '[4/4] 🔨  Building fresh packages...',
    'success Saved lockfile.',
    'success Saved 18 new dependencies.',
    'info Direct dependencies',
    '├─ @testing-library/jest-dom@4.2.4',
    '├─ @testing-library/react@9.4.0',
    '├─ @testing-library/user-event@7.2.1',
    '├─ react-dom@16.12.0',
    '└─ react@16.12.0',
    'info All dependencies',
    '├─ @sheerun/mutationobserver-shim@0.3.2',
    '├─ @testing-library/dom@6.11.0',
    '├─ @testing-library/jest-dom@4.2.4',
    '├─ @testing-library/react@9.4.0',
    '├─ @testing-library/user-event@7.2.1',
    '├─ @types/prop-types@15.7.3',
    '├─ @types/react-dom@16.9.4',
    '├─ @types/react@16.9.17',
    '├─ @types/testing-library__dom@6.11.0',
    '├─ @types/testing-library__react@9.1.2',
    '├─ css.escape@1.5.1',
    '├─ csstype@2.6.8',
    '├─ min-indent@1.0.0',
    '├─ react-dom@16.12.0',
    '├─ react@16.12.0',
    '├─ redent@3.0.0',
    '├─ strip-indent@3.0.0',
    '└─ wait-for-expect@3.0.1',
    '✨  Done in 16.49s.',
    'Removing template package using yarnpkg...',
    'iokay empty',
    'yarn remove v1.19.1',
    '[1/2] 🗑  Removing module cra-template...',
    '[2/2] 🔨  Regenerating lockfile and installing missing dependencies...',
    'success Uninstalled packages.',
    '✨  Done in 4.84s.',
    'iokay empty',
    'Initialized a git repository.',
    'iokay empty',
    'Success! Created iokay at /Users/wyjie/Codes/iokay',
    'Inside that directory, you can run several commands:',
    'iokay empty',
    'yarn start',
    'Starts the development server.',
    'yarn build',
    'Bundles the app into static files for production.',
    'yarn test',
    'Starts the test runner.',
    'iokay empty',
    'yarn eject',
    'Removes this tool and copies build dependencies, configuration files',
    'and scripts into the app directory. If you do this, you can’t go back!',
    'iokay empty',
    'We suggest that you begin by typing:',
    'iokay empty',
    'cd ~/iokay',
    'yarn start',
    'iokay empty',
    '✨  Done in 21.28s.',
  ],
  currentCommands: [],
  currentCommand: 'yarn create react-app iokay',
  commandMaxIndex: 94,
  currentIndex: 0,
  currentChar: 1,
  commandRun: true,
};

/* eslint-disable default-case, no-param-reassign, no-unused-vars */
const MyTeamPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case VIEW_NEXT_LINE: {
        const {
          currentIndex,
          initCommands,
          currentChar,
          currentCommands,
          commandMaxIndex,
        } = draft;
        const currentCommand = initCommands[currentIndex];
        if (isObject(currentCommand) && currentCommand.type === CHAR) {
          // 一次读取一个字
          if (currentChar > currentCommand.command.length) {
            draft.currentChar = 1;
            draft.currentIndex += 1;
          } else {
            currentCommands.pop();
            draft.currentCommands.push({
              command: currentCommand.command.substr(0, currentChar),
              type: LINE,
            });
            draft.currentChar += 1;
          }
        } else {
          // 一次读取一行
          draft.currentCommands.push({
            command: currentCommand,
            type: LINE,
          });
          if (currentIndex >= commandMaxIndex) {
            draft.commandRun = false;
          } else {
            draft.currentIndex += 1;
          }
        }
      }
    }
  });

export default MyTeamPageReducer;
