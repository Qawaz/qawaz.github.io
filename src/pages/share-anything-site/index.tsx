import React, {useEffect} from "react";

export default function Main() {
    useEffect(() => {
        const a = document.createElement("a")
        a.href = "/"
        a.click()
    })
    return (
        <div>
            redirecting you...
        </div>
    )
}