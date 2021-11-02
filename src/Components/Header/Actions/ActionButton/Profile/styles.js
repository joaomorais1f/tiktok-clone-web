import styled from 'styled-components';

const User = styled.div`
  position: relative;
  padding: 12px 8px;

  &:hover {
    .dropdown {
      visibility: visible;
      opacity: 1;
      transition: all .5s ease-in-out;  
    }
  }

  &:not(:hover) {
    .dropdown {
      transition-delay: .3s;
    }
  }

`;

User.Button = styled.button`
  background: none;
  outline: none;
  border: none;
  font-size: 0;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }


`;

User.Tooltip = styled.div`
  position: absolute;
  top: 60px;
  left: -150px;
  flex-direction: column;
  visibility: hidden;
  opacity: 0;
  padding: 8px 0;
  box-shadow: 0 -4px 32px rgb(0 0 0 / 10%);
  border-radius: 8px;

  &::after {
    content: '';
    width: 15px;
    height: 15px;
    background: #fff;
    position: absolute;
    right: 28px;
    top: -7px;
    transform: rotate(45deg);
    box-shadow: 0 -4px 32px rgb(0 0 0 / 10%);
  }

  ul {
    list-style: none;
    &:first-child { 
      border-bottom: 0.5px solid #1618231f;
      padding: 0 0 8px 0;
    }

    padding: 6px 0;

    li {
      cursor: pointer;
      padding: 8px 16px;
      white-space: nowrap;
      display: flex;
      align-items: center;

      &:hover {
        background: #16182308;
      }

      svg {
        width: 20px;
      }

      a {
        font-weight: 700;
        font-size: 14px;
        text-decoration: none;
        padding: 0 16px;

        &:visited {
          color: #121212;
        }
      }
    }
  }
`;


export default User;