import React, { useState } from 'react';

import AppContainer from './App.components';
import Terminal from '../../components/Terminal';
import Config from './App.config';
import Bounce from '../../animations/Bounce';

const App = props => {
  const {
    commands,
    onViewNextLine,
    commandRun,
    currentIndex,
    currentChar,
  } = props;
  const [animationend, setAnimationend] = useState(false);
  const onAnimationendHandle = () => setAnimationend(true);

  return (
    <AppContainer>
      <Bounce duration={2} onAnimationendHandle={onAnimationendHandle}>
        <Terminal
          animationend={animationend}
          commands={commands}
          onViewNextLine={onViewNextLine}
          commandRun={commandRun}
          currentIndex={currentIndex}
          currentChar={currentChar}
        />
      </Bounce>
    </AppContainer>
  );
};

App.propTypes = Config.propTypes;

export default App;
