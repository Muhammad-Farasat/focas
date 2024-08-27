import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: ${(props) => props.bgColor || '#fff'};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  padding: ${(props) => props.padding1};

  @media not all and (min-width: 640px){
    padding: 2px 2px;
    width: 40px;
  }

`;

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  flex: 1;
  padding: ${(props) => props.padding};
  height: 100%;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  color: #888;
`;

function Input(props) {
  const { holder, type, icon, iconPosition, height, padding, padding1, width, className, borderRadius, bgColor} = props;
  return (
    <Div height={height} padding1={padding1} bgColor={bgColor} className={className} width={width} borderRadius={borderRadius}> 
      {icon && iconPosition === 'before' && <IconWrapper>{icon}</IconWrapper>}
      <StyledInput
        type={type}
        placeholder={holder}
        padding={padding}
      />
      {icon && iconPosition === 'after' && <IconWrapper>{icon}</IconWrapper>}
    </Div>
  );
}

export default Input;
