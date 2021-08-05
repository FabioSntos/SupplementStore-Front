import styled from "styled-components";

export const Container = styled.section`
  min-height: 650px;
  height: auto;
  width: 100%;

  margin: 0 auto;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .contentDepartment {
    width: 80%;
    margin: 0 auto;
  }
  h3 {
    color: #ffd500;
    font-weight: bold;
    font-size: 30px;
    padding-top: 45px;
    padding-bottom: 45px;
  }
  .departmentContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 1270px) {
    h3 {
      text-align: center;
    }
    .departmentContainer {
      flex-direction: column;
    }
    .department {
      height: 400px;
      width: 300px;
    }
  }
`;
