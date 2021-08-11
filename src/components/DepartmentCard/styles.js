import styled from "styled-components";

export const DepartmentCardStyle = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  height: 400px;
  width: 30%;
  max-width: 300px;
  background: #fff;
  border: 8px solid #363234;
  filter: drop-shadow(8px 8px 4px rgba(255, 255, 255, 0.25));
  border-radius: 50px;
  cursor: pointer;
  min-width: 300px;

  .departmentContent {
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    justify-content: space-between;
    img {
      margin-top: 40px;
    }

    span {
      font-size: 36px;
      font-weight: bold;
      color: #363234;
    }
  }
`;
