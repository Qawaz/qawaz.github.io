import styled from "styled-components";

export const DemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 4em;
  justify-content: center;
  align-items: center;

  ${props => props.theme.breakpoints.up("sm")} {
    flex-direction: row;
  }
`

export const DemoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DemoImage = styled.div`

`