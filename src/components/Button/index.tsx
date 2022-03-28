import React from "react";
import styled from "styled-components";

export default function Button(prop: { title: string }) {
  const StyledButton = styled.button`
    padding: 2px 5px;
  `;
  const { title } = prop;
  // return <button {...prop}>{title}</button>;
  return <StyledButton {...prop}>{title}</StyledButton>;
}
