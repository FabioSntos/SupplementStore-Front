import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const ContainerDoubts = styled.div`
  display: flex;

  vertical-align: middle;
  flex-direction: column;
  min-height: 600px;
  height: auto;
  padding-top: 120px;

  h3 {
    padding-left: 40px;
  }
  @media screen and (max-width: 1270px) {
    justify-content: center;
    margin: 0 auto;
  }
`;

export const ImageDoubtsContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (max-width: 1270px) {
    display: none;
  }
`;
