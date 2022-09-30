import { Button } from '@mui/material'
import React from 'react'
import "./banner.css"
// import Lottie from "react-lottie";
// import * as animationData from './myloader.json'
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./myloader.json";

function Banner() {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };

  const options = {
    animationData: groovyWalkAnimation,
    loop: true
  };
  const { View } = useLottie(options);
  return (
    <div className="main">
      <div className='banner'>

        <div className="banner_content">
          <p className="banner_sub">Award-Winning Mobile App Development Agency</p>
          <p className="banner_main">Build and transform your business through strategy, design and app development</p>
          <Button 
          style={{ "margin-left": "50px", "text-transform": "capitalize", color: "blue", background: "white", borderRadius: "50px" }} 
          color="inherit" 
          variant="outlined" 
          size="large">Let's talk😄</Button>
        </div>

        <div className="animation">
        <>{View}</>
          {/* <Lottie options={defaultOptions} height={700} width={500} /> */}
        </div>
      </div>

      <div className="logos">
        <div className='trust'>
          <p className="logo">Trusted By</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSToc2I6LJcsD3mubZAfNraFZfpkC8J1SnYQ-0oO1VxHCKPqneBzk8IIUsvHcvEH2aang&usqp=CAU" alt="img" className="img" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJHad9_dzp2nJBpWuwamW-iAS830CMBQBB6P_lsG6s3PWcl_KNhORuXbumDJTs3wCL1V0&usqp=CAU" alt="img" className="img" />
          <img src="https://data.bloomberglp.com/company/sites/51/2019/08/og-image-generic-lp.png" alt="img" className="img" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" alt="img" className="img" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="img" className="img" />
        </div>
        <div className='awards'>
          <p className="logo">Awards</p>
          <img src="https://yt3.ggpht.com/ytc/AMLnZu9ntQt2G6qYqfZMmEZIFqb2nl-auN1HrU2AklkWGR0=s900-c-k-c0x00ffffff-no-rj" alt="img" className="img" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJLEg0hc4XfHsIKvP18GIg7zOOVImrj4kkrttIdPCiQXvFeFRKLavEaqzUgwxgwm5uhc&usqp=CAU" alt="img" className="img" />
          <img src="https://scontent.fmaa2-1.fna.fbcdn.net/v/t39.30808-6/307121593_460528782760806_4238574747335020382_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=oaruAZH3eEUAX_ityxy&_nc_ht=scontent.fmaa2-1.fna&oh=00_AT998xt00VTePC5XJfy-piZM1E2fka-drqmi7rkjg5XifQ&oe=633ACCFE" alt="img" className="img" />
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Webby_Awards.svg/1200px-Webby_Awards.svg.png" alt="img" className="img" />
        </div>
      </div>
    </div>
  )
}

export default Banner