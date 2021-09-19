import * as React from "react"
import {Helmet} from "react-helmet"

export default function WebFonts() {
    return (
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"anonymous"} />
            <link
                href="https://fonts.googleapis.com/css2?family=Pacifico&family=Raleway:wght@300&family=Roboto&display=swap"
                rel="stylesheet"/>
        </Helmet>
    )
}