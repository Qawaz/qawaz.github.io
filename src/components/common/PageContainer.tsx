import Providers from "../Providers";
import CustomHelmet from "./CustomHelmet";
import { GlobalStyles } from "./GlobalStyles";

interface PageProps { title? : string }

export default function PageContainer(props : React.PropsWithChildren<PageProps>){
    return (
        <Providers>
            <CustomHelmet title={"Codeckle - " + (props.title || "Software Solutions") } />
            <GlobalStyles/>
            {props.children}
        </Providers>
    )
}