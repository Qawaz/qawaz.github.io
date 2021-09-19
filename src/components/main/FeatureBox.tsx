import styled from "styled-components";
import {useTheme} from "@material-ui/core";
import * as React from "react"

export const FeatureBox = styled((props) => {

    const theme = useTheme()

    return (
        <div style={{border: "2px solid "+theme.palette.primary.main}} {...props}/>
    )

})`
  width: 12em;
  height: 2em;
  border-radius: 1.5em;
  padding : 1em;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
`

export const FeatureText = styled((props) => {
    const theme = useTheme()
    return (
        <span style={{
            color: theme.palette.primary.main
        }} {...props} />
    )
})`
  font-family: 'Roboto', 'sans-serif';
  padding-left : 1em;
`