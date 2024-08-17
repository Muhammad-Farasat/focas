import React from "react";
import styled from "styled-components";
// import { FaPlus } from "react-icons/fa";
// import { icon } from "@fortawesome/fontawesome-svg-core";

const SButton = styled.button`
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  border:  ${(props) => props.border || 'transparent'};
  font-size: ${(props) => props.fontsize};
  font-family: Inter;
  font-weight: 600;
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.backcolor};     
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hovercolor};
    color: ${(props) => props.hovcolor};
  }
  
  }
`;

function Button(props) {
  const { 
          name,
          backcolor,
          hovercolor, 
          color, 
          width, 
          fontsize, 
          radius, 
          children, 
          iconPosition, 
          padding, 
          hovcolor,
          showTextOnSmall,
          className,
          border,
          onClick
        } = props;

  return (
    <div>
      <SButton
        backcolor={backcolor}
        fontsize={fontsize}
        width={width}
        color={color}
        hovercolor={hovercolor}
        radius={radius}
        padding={padding}
        hovcolor={hovcolor}
        showTextOnSmall={showTextOnSmall}
        className={className}
        border={border}
        onClick={onClick}
      >
        {iconPosition === 'before' && children}
          
        <span className="text">{name}</span>
          
        {iconPosition === 'after' && children}
      </SButton>
    </div>
  );
}

export default Button;
