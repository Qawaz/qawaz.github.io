import styled from "styled-components";


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