
import Helmet from "react-helmet";

export default function CustomHelmet(props : { title : string }){
    return (
        <Helmet>
            <link rel="icon" href="/favicon.png"/>
            <title>{props.title}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"anonymous"} />
            <link
                href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&family=Roboto&display=swap"
                rel="stylesheet"/>
        </Helmet>
    )
}