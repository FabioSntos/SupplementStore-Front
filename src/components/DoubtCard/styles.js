import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const CardQuestion = styled.div`
  max-width: 700px;
  border: 1px solid #000;
  border-radius: 30px;
  min-height: 46px;
  height: auto;
  cursor: pointer;
  filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
  padding-left: 20px;
  padding-right: 20px;
  span {
    text-transform: uppercase;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 14px;
  }

  .AnswerOff {
    display: none;
  }
  &.active {
    background-color: #ffe876;
    display: block;
  }
`;
export const AskQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
`;
