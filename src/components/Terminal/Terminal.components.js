import styled from 'styled-components';

import { Colors } from '../../themes';

export const TerminalContainer = styled.div`
  height: 500px;
  width: 745px;
  border-radius: 5px;
  box-shadow: 0 0 20px ${Colors.rgba0002};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TerminalHeader = styled.div`
  height: 22px;
  width: 100%;
  border-radius: 4px 4px 0 0;
  background: ${Colors.headerBGC};
  display: flex;
  align-items: center;

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    margin: 0 4.5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    filter: brightness(1.1);
    cursor: pointer;
  }

  .close {
    background-color: ${Colors.buttonRed};
  }

  .minimize {
    background-color: ${Colors.buttonYellow};
  }

  .maximize {
    background-color: ${Colors.buttonGreen};
  }

  .title {
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    color: ${Colors.grey4A};
    font-size: 14px;
  }
`;

export const TerminalContent = styled.div`
  width: 100%;
  height: 100%;
  color: #7b8c90;
  background-color: #002c36;
  border-radius: 0 0 4px 4px;
  padding: 6px;
  box-sizing: border-box;
  overflow-y: auto;

  .commands {
    padding: 6px;
    box-sizing: border-box;
    .empty-line {
      color: #002c36;
    }
    .print span {
      display: block;
      height: 24px;
    }
  }
`;
