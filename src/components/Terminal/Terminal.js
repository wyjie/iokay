import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  TerminalContainer,
  TerminalHeader,
  TerminalContent,
} from './Terminal.components';
import TerminalHeaderButton from './Terminal.Header.Button';
import Config from './Terminal.config';
import Command from './Terminal.Command';

const Terminal = props => {
  const {
    commands,
    commandRun,
    onViewNextLine,
    currentIndex,
    currentChar,
    animationend,
  } = props;
  const { close, min, max } = Config.buttonTypes;

  useEffect(() => {
    if (commandRun && animationend) {
      setTimeout(() => {
        onViewNextLine();
      }, 100);
      const commandElements = document.getElementsByClassName('command');
      if (commandElements.length) {
        commandElements[commandElements.length - 1].scrollIntoView();
      }
    }
  }, [currentIndex, currentChar, commandRun, animationend]);

  return (
    <TerminalContainer id="terminal">
      <TerminalHeader>
        <div className="buttons">
          <TerminalHeaderButton type={close} />
          <TerminalHeaderButton type={min} />
          <TerminalHeaderButton type={max} />
        </div>
        <div className="title">{Config.title}</div>
      </TerminalHeader>
      <TerminalContent>
        <div className="top-info">{Config.topInfo}</div>
        <div className="commands">
          {commands.map((item, index) => {
            // eslint-disable-next-line react/no-array-index-key
            return <Command key={`commands-${index}`} command={item} />;
          })}
        </div>
      </TerminalContent>
    </TerminalContainer>
  );
};

Terminal.propTypes = {
  commands: PropTypes.array,
  commandRun: PropTypes.bool,
  onViewNextLine: PropTypes.func,
  currentIndex: PropTypes.number,
  currentChar: PropTypes.number,
  animationend: PropTypes.bool,
};

Terminal.defaultProps = {
  commands: [],
  commandRun: false,
  onViewNextLine: () => {},
  currentIndex: 0,
  currentChar: 1,
  animationend: false,
};

export default Terminal;
