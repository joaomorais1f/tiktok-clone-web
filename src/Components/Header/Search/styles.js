import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular/Search';

const Input = styled.div`
  position: relative;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

Input.Form = styled.form`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 92px;
  background-color: #1618230f;
  overflow: hidden;
  position: relative;
  z-index: 1;
  height: 48px;
`;

Input.Text = styled.input`
  font-family: proxima-regular;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  border: none;
  background: transparent;
  outline: none;
  padding: 0px;
  width: 292px;
  caret-color: rgb(254, 44, 85);
  appearance: textfield;

  &:focus ~ .border {
    display: flex;
  }
`;

Input.Split = styled.div`
  width: 1px;
  height: 28px;
  display: inline;
  margin: -3px 0px;
  background: #1618231f;
`;

Input.Submit = styled.button`
  padding: 11px 16px 11px 12px;
  margin: -12px -16px -12px 0px;
  font-size: 0;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  &:hover {
    background: #16182308;
    border-top-right-radius: 92px;
    border-bottom-right-radius: 92px;
  }
`;

Input.Border = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  display: none;
  border-radius: 92px;
  border: 1.5px solid #16182333;
`;

Input.SubmitIcon = styled(Search)`

`;


export default Input;