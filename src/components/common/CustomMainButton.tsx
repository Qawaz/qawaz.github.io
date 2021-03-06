;
import {FC} from "react";
import styled from "styled-components";

export const CustomMainButton = styled.button`
  border-radius:1.5em;
  height:3.6em;
  text-align:center;
  text-decoration:none;
  opacity:0.9;
  padding:2em;
  border:0;
  display:flex;
  flex-direction:row;
  align-items:center;
  cursor:pointer;
  margin:0.5em;
  background : ${props=> props.theme.palette.primary.main};
  &:hover{
    opacity:1;
  }
`