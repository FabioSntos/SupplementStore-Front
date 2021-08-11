import styled from "styled-components";

export const Container = styled.header`
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

export const Navbar = styled.nav`
  display: none;

  &.navMobile {
    display: flex;

    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 150px;
    z-index: 2;
    width: 300px;
    height: 400px;
    border: 1px solid #ffd500;
    background: #323232;
    li {
      list-style: none;
    }
    a {
      margin: 0 auto;
    }
    button {
      width: 250px;
      height: 40px;
      border-radius: 10px;
      border: 1px solid #fff;
      background: #ffd500;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        color: #000;
        font-family: "Poppins";
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
`;
