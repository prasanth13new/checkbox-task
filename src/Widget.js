import React from 'react'
import './widget.css'
// import Lottie from "react-lottie";
// import * as animationData from './ad_lottie.json'
import { useLottie } from "lottie-react";
import adLottie from "./ad_lottie.json";

function Widget() {
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //         preserveAspectRatio: 'xMidYMid slice'
    //     }
    // };

    const options = {
        animationData: adLottie,
        loop: true
      };
      const { View } = useLottie(options);

    return (
        <div className='widget'>
            <div className="widget_animation">
            <>{View}</>
                {/* <Lottie options={defaultOptions} height={700} width={500} /> */}
            </div>

            <div className="widget_box">
                <h2 className="widget_head">
                    <span>
                        <img
                            style={{ "marginLeft":"-20px","marginBottom": "-17px", "marginRight": "20px" }}
                            src='https://static.bluelabellabs.com/wp-content/uploads/2022/03/client-section-icon1.webp'
                            className='widget_img' />
                    </span>
                    Sol LeWitt
                </h2>
                <p className="widget_content">
                    We worked with Microsoft to integrate their AI & VR technology and develop this set of iOS & Android apps that explores the life and legacy of this influential 20th-century artist.
                </p>

                <img style={{"marginTop":"30px"}} src='https://static.bluelabellabs.com/wp-content/uploads/2022/03/client-section-logo1.webp' />
            </div>
        </div>
    )
}

export default Widget