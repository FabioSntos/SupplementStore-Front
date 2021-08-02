import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  display: flex;
  align-items: center;

  gap: 40px;
  padding-left: 30px;

  background-color: #323232;
  height: 100px;

  margin-bottom: 30px;
`;

export const ButtonMobile = styled.button`
  background-color: transparent;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  padding: 0px;
  display: flex;
  color: #ffd500, 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 1.5rem;
    height: 2px;
    border-radius: 2px;
    background: #ffd500;
    box-shadow: 0 6px #ffd500, 0 -6px #ffd500;
    transition: 0.2s;
  }

  &.mobileButton:focus,
  &.mobileButton:hover,
  &.mobileButtonActive {
    outline: none;
  }

  &.mobileButtonActive::after {
    transform: rotate(90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px #ffd500, 0 -8px #ffd500;
  }
`;
