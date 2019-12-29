import React from 'react';

import Config from './Terminal.config';

const Command = props => {
  const {
    command: { command, type },
  } = props;
  return (
    <div className="command">
      {command &&
        (type !== Config.LINE ? (
          { command }
        ) : (
          <div className="print">
            <span className={command === 'iokay empty' ? 'empty-line' : null}>
              {command}
            </span>
          </div>
        ))}
    </div>
  );
};

Command.propTypes = Config.commandButtonPropTypes;
Command.defaultProps = Config.commandButtonDefaultProps;

export default Command;
