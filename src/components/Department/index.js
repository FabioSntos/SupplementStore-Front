import { Container } from "./styles";
import backgroundDepartment from "../../assets/departmentBackground.png";

import FaceIcon from "../../assets/faceIcon.svg";
import Fitness from "../../assets/fitness.svg";
import Shield from "../../assets/shield.svg";
import { DepartmentCard } from "../DepartmentCard";

export const Department = () => {
  return (
    <Container style={{ backgroundImage: `url(${backgroundDepartment})` }}>
      <div className="contentDepartment">
        <h3>Packs para cada objetivo</h3>
        <div className="departmentContainer">
          <DepartmentCard img={Shield} alt="shield">
            <span>Imunidade </span>
          </DepartmentCard>
          <DepartmentCard img={FaceIcon} alt="shield">
            <span>Sono</span>
          </DepartmentCard>
          <DepartmentCard img={Fitness} alt="shield">
            <span>Esporte</span>
          </DepartmentCard>
        </div>
      </div>
    </Container>
  );
};
