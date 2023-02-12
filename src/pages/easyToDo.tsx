import React from "react";
// @ts-ignore
import HomeEight from "../apps/easyToDo/components/index.js"
// @ts-ignore
// import ScrollToTop from '../apps/easyToDo/components/Helper/ScrollToTop';
import '../apps/easyToDo/assets/css/bootstrap.min.css';
import '../apps/easyToDo/assets/css/custom-animated.css';
import '../apps/easyToDo/assets/css/default.css';
import '../apps/easyToDo/assets/css/font-awesome.min.css';
import '../apps/easyToDo/assets/css/magnific-popup.css';
import '../apps/easyToDo/assets/css/main.css';
import '../apps/easyToDo/assets/css/style.css';

const DataObject = {

}

export default function EasyToDo() {
    return (
        <div className={`appie-visible`} style={{opacity: "1"}}>
            {/*<ScrollToTop>*/}
            <HomeEight/>
            {/*</ScrollToTop>*/}
        </div>
    )
}