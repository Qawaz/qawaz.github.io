import styled from "styled-components";
import {useTheme} from "@material-ui/core";


export const FeatureBox = styled.div`
  width: 12em;
  height: 2em;
  border-radius: 1.5em;
  padding : 1em;
  margin : 1em;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  border : 2px solid ${props=> props.theme.palette.primary.main}; 
`

export const FeatureText = styled.span`
  font-family: 'Roboto', 'sans-serif';
  padding-left : 1em;
  color : ${props=> props.theme.palette.primary.main};
`