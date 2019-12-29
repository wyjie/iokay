import PropTypes from 'prop-types';
import { format } from 'date-fns';

const buttonTypes = {
  close: 0,
  min: 1,
  max: 2,
};

const LINE = 1;

const buttonTypesArray = ['close', 'minimize', 'maximize'];

const headerButtonPropTypes = {
  type: PropTypes.number,
  onClick: PropTypes.func,
};

const headerButtonDefaultProps = {
  type: buttonTypes.close,
  onClick: () => {},
};

const commandButtonPropTypes = {
  command: PropTypes.object,
};

const commandButtonDefaultProps = {
  command: {
    command: '',
    prints: [],
  },
};

const title = 'shucha@iokay ~ ';
const time = format(new Date(), 'EEE LLL d HH:mm:ss');
const topInfo = `I Okay: ${time} on ttys000`;

const initCommands = [
  {
    command: 'yarn create react-app iokay',
    prints: [
      'yarn create v1.19.1',
      '[1/4] 🔍  Resolving packages...',
      '[2/4] 🚚  Fetching packages...',
      '[3/4] 🔗  Linking dependencies...',
      '[4/4] 🔨  Building fresh packages...',
      'success Installed "create-react-app@3.3.0" with binaries: create-react-app',
      '[###############################################################] 92/92',
      'Creating a new React app in /Users/wyjie/Codes/iokay.',
      '',
      'Installing packages. This might take a couple of minutes.',
      'Installing react, react-dom, and react-scripts with cra-template...',
      '',
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
      '✨  Done in 46.66s.',

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
      '✨  Done in 114.49s.',
      'Removing template package using yarnpkg...',
      '',
      'yarn remove v1.19.1',
      '[1/2] 🗑  Removing module cra-template...',
      '[2/2] 🔨  Regenerating lockfile and installing missing dependencies...',
      'success Uninstalled packages.',
      '✨  Done in 4.84s.',
      '',
      'Initialized a git repository.',
      '',
      'Success! Created iokay at /Users/wyjie/Codes/iokay',
      'Inside that directory, you can run several commands:',
      '',
      '  yarn start',
      '    Starts the development server.',
      '',
      '  yarn build',
      '    Bundles the app into static files for production.',
      '',
      '  yarn test',
      '    Starts the test runner.',
      '',
      '  yarn eject',
      '    Removes this tool and copies build dependencies, configuration files',
      '    and scripts into the app directory. If you do this, you can’t go back!',
      ' ',
      'We suggest that you begin by typing:',
      ' ',
      '  cd ~/iokay',
      '  yarn start',
      '',
      'Happy hacking!',
      '✨  Done in 205.97s.',
    ],
  },
  {
    command: 'yarn start',
  },
];

export default {
  LINE,
  initCommands,
  title,
  time,
  topInfo,
  buttonTypesArray,
  buttonTypes,
  headerButtonPropTypes,
  headerButtonDefaultProps,
  commandButtonPropTypes,
  commandButtonDefaultProps,
};
