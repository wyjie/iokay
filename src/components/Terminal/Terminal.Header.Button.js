import React from 'react';

import Config from './Terminal.config';

const TerminalHeaderButton = props => {
  const { onClick, type } = props;
  const clickHandle = () => {
    onClick();
  };

  return (
    <span
      className={`${Config.buttonTypesArray[type]} button`}
      onClick={() => clickHandle()}
    />
  );
};

TerminalHeaderButton.propTypes = Config.headerButtonPropTypes;
TerminalHeaderButton.defaultProps = Config.headerButtonDefaultProps;

export default TerminalHeaderButton;
