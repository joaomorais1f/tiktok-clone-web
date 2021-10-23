import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  padding-left: 20px;
  padding-right: 24px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #ccc;
`;

Navbar.Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  padding: 0 20px 0 12px;
  background: orange;
`;


export default Navbar;