import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import PropTypes from 'prop-types';

const animation = keyframes`${bounce}`;
const BounceAnimation = styled.div`
  animation: ${props => props.duration}s ${animation};
`;

const Bounce = props => {
  const { onAnimationendHandle, ...animationProps } = props;

  return (
    <BounceAnimation
      onAnimationEnd={() => onAnimationendHandle()}
      {...animationProps}
    />
  );
};

Bounce.propTypes = {
  duration: PropTypes.number,
  onAnimationendHandle: PropTypes.func,
};

Bounce.defaultProps = {
  duration: 1,
  onAnimationendHandle: () => {},
};

export default Bounce;
