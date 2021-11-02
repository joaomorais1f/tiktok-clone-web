import styled from 'styled-components';

const ActionBtn = styled.button`
  font-size: 0;
  cursor: pointer;
  border: none;
  background: none;
  padding: 12px 10px;

  &.notifications {
    position: relative;

    &::after {
      position: absolute;
      content: '${(props) => props.notifications}';
      display: flex;
      align-items: center;
      justify-content: center;
      right: -6px;
      top: 2px;
      min-width: 20px;
      height: 20px;
      font-size: 13px;
      padding: 0 6px;
      border-radius: 10px;
      color: #fff;
      font-weight: 600;
      background: #fe2c55;
    }
  }
`;  

ActionBtn.Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50px;
  width: 50px;
  cursor: pointer;
  
  .tooltip {
    position: relative;
    white-space: nowrap;
    transition: all .5s;
    transform: translateY(-80%);
    visibility: hidden;
    opacity: 0;
    background: #545454;
    padding: 12px;
    border-radius: 8px;
    font-weight: 700;
    cursor: default;
  }

  .tooltip::after {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    width: 15px;
    height: 15px;
    transform: translate(-50%, 0) rotate(45deg);
    background: #545454;
  }

  &:hover {
    .tooltip {
      transition-delay: .4s;
      transform: translateY(0%);
      visibility: visible;
      opacity: 1;
      color: #fff;
    }
  }
`;


export default ActionBtn;