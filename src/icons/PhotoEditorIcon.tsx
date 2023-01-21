import React from "react"

const MindNodeLogo = (props : any) => {
    return (
        <svg viewBox="0 0 399.47 399.47" {...props}>
            <defs>
                <linearGradient id="linear-gradient" y1="199.73" x2="399.47" y2="199.73" gradientUnits="userSpaceOnUse">
                    <stop offset="0.01" stop-color="#e58652"/>
                    <stop offset="1" stop-color="#e54e52"/>
                </linearGradient>
                <linearGradient id="linear-gradient-2" x1="114.23" y1="191.06" x2="285.79" y2="191.06"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#e54e52"/>
                    <stop offset="0.75" stop-color="#e58052"/>
                </linearGradient>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <circle cx="199.73" cy="199.73" r="199.73" fill="#fff"/>
                    <path d="M199.73,0C89.42,0,0,89.42,0,199.73A199.33,199.33,0,0,0,74.4,355.24V191.11h.31a125.28,125.28,0,1,1,60.86,116.3v81.53a199.42,199.42,0,0,0,64.16,10.53C310,399.47,399.47,310,399.47,199.73S310,0,199.73,0Z"
                          fill="url(#linear-gradient)"/>
                    <path d="M200,276.55a85,85,0,0,0,85.81-84.85c.15-24.12-8.47-45.48-26-62.42-19.73-19-43.7-25.85-70.76-23.15-36.09,3.59-74.61,36.08-74.77,85.4C114.08,238.45,152.54,276.51,200,276.55Zm21.24-121.19a14.34,14.34,0,0,1,14.6,13.9,14.68,14.68,0,0,1-14.07,14.55,14.49,14.49,0,0,1-14.45-14.12C207.51,162.72,212.08,155.48,221.21,155.36Z"
                          fill="url(#linear-gradient-2)"/>
                </g>
            </g>
        </svg>
    )
}

export default MindNodeLogo