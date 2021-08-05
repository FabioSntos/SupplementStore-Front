import React from "react";
import { DepartmentCardStyle } from "./styles";

export const DepartmentCard = ({ children, img, alt }) => {
  return (
    <DepartmentCardStyle>
      <div className="departmentContent">
        <img src={img} alt={alt} />
        <span>{children}</span>
      </div>
    </DepartmentCardStyle>
  );
};
